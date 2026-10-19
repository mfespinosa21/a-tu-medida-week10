export const UNKNOWN='Por confirmar';
export function number(value,label,max,allowZero=false){
 const text=String(value??'').trim(); if(!text)return null;
 const n=Number(text.replace(',','.'));
 if(!/^\d+(?:[.,]\d+)?$/.test(text)||!Number.isFinite(n)||(allowZero?n<0:n<=0)||n>max)throw new Error(`${label}: escribe un número ${allowZero?'igual o mayor que 0':'mayor que 0'} y hasta ${max}, sin signo de pesos ni separadores de miles.`);
 return n;
}
export function text(value,label,max,required=false){
 const result=String(value??'').trim();
 if(result.length>max||required&&!result)throw new Error(`${label}: ${required?'es obligatorio y ':''}admite hasta ${max} caracteres.`);
 return result;
}
export function build(data){
 const d={};
 for(const [key,label,max,required] of [['model','Modelo exacto',100,true],['q1','Pregunta 1',200,true],['q2','Pregunta 2',200,true],['source','Texto de la fuente',2500,true],['url','URL de la fuente',500,false],['assumptions','Supuestos',500,false],['contradictions','Contradicciones',500,false]])d[key]=text(data[key],label,max,required);
 if(d.url){let url;try{url=new URL(d.url);}catch{throw new Error('Fuente: usa una URL completa https:// o déjala vacía.');}if(!['https:','http:'].includes(url.protocol)||url.username||url.password)throw new Error('Fuente: solo se admite http/https sin credenciales.');}
 for(const [key,label,max] of [['budget','Presupuesto',1000000],['space','Ancho disponible',1000],['price','Precio publicado',1000000],['width','Ancho publicado',1000],['clearance','Holgura total requerida',1000],['shipping','Envío',1000000]])d[key]=number(data[key],label,max,['shipping','clearance'].includes(key));
 if(!data.match)throw new Error('Confirma que el modelo de la fuente coincide con el producto. Si no puedes, detén la nota.');
 const gap=d.space!==null&&d.width!==null?d.space-d.width:null;
 let fit=UNKNOWN;
 if(gap!==null){fit=gap<0?`Diferencia de ancho: ${gap.toFixed(1)} cm. El equipo supera el espacio indicado.`:d.clearance===null?`Diferencia de ancho: ${gap.toFixed(1)} cm. Espacio libre requerido por confirmar: no se confirma instalación.`:`Diferencia de ancho: ${gap.toFixed(1)} cm; holgura total declarada: ${d.clearance} cm. ${gap>=d.clearance?'El cálculo de ancho satisface esa holgura declarada.':'No satisface esa holgura declarada.'} Altura, fondo, accesos y manual siguen por confirmar.`;}
 let budgetResult=UNKNOWN;
 if(d.budget!==null&&d.price!==null){const known=d.price+(d.shipping??0);const delta=d.budget-known;budgetResult=`Subtotal conocido: $${known.toFixed(2)} MXN (precio $${d.price.toFixed(2)} + envío ${d.shipping===null?UNKNOWN:`$${d.shipping.toFixed(2)}`}). Este subtotal ${delta<0?'supera':'queda dentro de'} tu límite por $${Math.abs(delta).toFixed(2)} MXN. Otros cargos por confirmar; si falta envío, tampoco está incluido. No se confirma el costo final ni que puedas pagarlo.`;}
 return {...d,fit,budgetResult,sourceChecked:!!data.sourceChecked,created:new Date().toISOString()};
}
export const sample={model:'Frío Norte FN-280 (ficticio)',q1:'¿Cabe en mi espacio sin ignorar la ventilación?',q2:'¿El precio y las condiciones están claros?',budget:'12000',space:'70',price:'11490',width:'68',clearance:'',shipping:'',url:'',source:'EJEMPLO FICTICIO. Frío Norte FN-280. Ancho publicado: 68 cm. Precio anunciado: $11,490 MXN. La ficha no informa holgura de ventilación, costo de envío ni condiciones de devolución. No es una oferta real.',assumptions:'Se supone que las medidas del comprador están tomadas correctamente; no están verificadas.',contradictions:'',match:false,sourceChecked:false};
