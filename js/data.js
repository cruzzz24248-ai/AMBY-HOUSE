/* ÚNICO lugar para editar modelos, líneas, extras, proyectos, proceso y contacto.
   REALES (Instagram / web actual): modelos, m², ambientes, extras USD 4.500 y 3.500, teléfono, mail, IVA 10,5%.
   DE EJEMPLO (reemplazar con datos de Mariano): precios por m² de cada línea, proyectos, ubicaciones, fotos extra, planos. */
window.AH={wa:'5493518096768',mail:'info@ambyhouse.com',iva:10.5,
lineas:[{id:'premium',n:'Línea Premium',usd:950,d:'Equilibrio ideal: buena estética y completo equipamiento.'},{id:'deluxe',n:'Línea Deluxe',usd:1150,d:'Terminaciones superiores. Ideal para inversión premium.'}],
extras:[{id:'pergola',n:'Pérgola',d:'6,00 m × 2,50 m · estructura + chapa + LED.',usd:4500},{id:'deck',n:'Deck exterior',d:'Expande el espacio social y sube el valor percibido.',usd:3500}],
modelos:[
{id:'C15',k:'c15',m2:15,ex:'pérgola + deck',d:0,top:1,dm:'—',b:'1 (doble acceso)',uso:'Quincho / estar comedor',l:['Espacio integrado','Cocina','1 baño'],t:'Módulo social: estar comedor, cocina y baño con doble acceso.'},
{id:'C30',k:'c30',m2:30,ex:'pérgola + deck',d:1,top:1,dm:'1',b:'1',uso:'Vivienda',l:['Cocina comedor','1 dormitorio','1 baño','Living'],t:'Vivienda compacta con un dormitorio, living y cocina comedor.'},
{id:'C30 Terra',k:'c30t',m2:30,ex:'terraza + deck',d:1,dm:'1',b:'1',uso:'Vivienda / renta turística',l:['Cocina comedor','1 dormitorio','1 baño','Living'],t:'La versión en dos niveles del C30, con terraza y deck.'},
{id:'C36',k:'c36',m2:36,ex:'pérgola + deck',d:1,top:1,dm:'1',b:'1',uso:'Vivienda',l:['Cocina comedor','1 dormitorio','1 baño','Living'],t:'Más espacio social: living amplio y galería con pérgola.'},
{id:'C45',k:'c45',m2:45,ex:'pérgola + deck',d:2,top:1,dm:'2',b:'1',uso:'Vivienda',l:['Cocina comedor','2 dormitorios','1 baño','Living'],t:'Dos dormitorios para una familia, con deck y pérgola.'},
{id:'C60',k:'c60',m2:60,ex:'pérgola + deck',d:2,dm:'1–2',b:'1',uso:'Vivienda',l:['1–2 dormitorios','1 baño','Living y cocina comedor','Guardado y lavadero'],t:'Incluye espacio de guardado y lavadero / espacio técnico.'},
{id:'C90',k:'c90',m2:90,ex:'pérgola + deck',d:3,dm:'2–3',b:'1–2',uso:'Vivienda familiar',l:['2–3 dormitorios','1–2 baños','Sala y cocina comedor','Guardado y lavadero'],t:'El más grande: sala, 2 a 3 dormitorios y lavadero.'}],
proyectos:[
{id:1,n:'Casa de fin de semana',tipo:'Vivienda',loc:'Villa Carlos Paz, Córdoba',m:'C30',l:'Premium',tags:['Deck','Pérgola']},
{id:2,n:'Cabañas de renta',tipo:'Turismo',loc:'Mina Clavero, Córdoba',m:'C30 Terra',l:'Deluxe',tags:['Terraza','Renta']},
{id:3,n:'Oficina de obra',tipo:'Oficina',loc:'Córdoba Capital',m:'C15',l:'Premium',tags:['Llave en mano']},
{id:4,n:'Casa familiar',tipo:'Vivienda',loc:'Unquillo, Córdoba',m:'C45',l:'Deluxe',tags:['2 dormitorios']},
{id:5,n:'Ampliación con quincho',tipo:'Ampliación',loc:'Río Ceballos, Córdoba',m:'C36',l:'Premium',tags:['Quincho','Pérgola']},
{id:6,n:'Casa de campo',tipo:'Vivienda',loc:'Alta Gracia, Córdoba',m:'C60',l:'Premium',tags:['Lavadero']},
{id:7,n:'Casa grande en loteo',tipo:'Vivienda',loc:'La Calera, Córdoba',m:'C90',l:'Deluxe',tags:['3 dormitorios']},
{id:8,n:'Alojamiento turístico',tipo:'Turismo',loc:'Villa General Belgrano, Córdoba',m:'C36',l:'Deluxe',tags:['Renta','Deck']}],
etapas:[['Descubrimiento','Relevamos tu necesidad','Definimos objetivo, uso, superficie, ubicación y presupuesto estimado.',['Asesoría inicial','Modelo y alcance','Propuesta preliminar']],
['Anteproyecto','Diseño y distribución','Ambientes, aberturas, circulaciones y estética general.',['Opciones de distribución','Línea y terminaciones','Lista de opcionales']],
['Técnica','Documentación y cómputo','Estructura, aislaciones, instalaciones y detalles constructivos.',['Planos y especificaciones','Cómputo de materiales','Plan de obra y logística']],
['Fabricación','Construcción en entorno controlado','Fabricación modular para mejorar calidad, tiempos y terminaciones.',['Estructura y cerramientos','Instalaciones de luz y agua','Terminaciones']],
['Obra en sitio','Preparación del terreno','Mientras se fabrica, se prepara la base y las acometidas.',['Platea o pilotes, según caso','Puntos de conexión','Accesos y grúa']],
['Montaje y entrega','Traslado y puesta en marcha','Se monta el módulo, se conectan servicios y se hace el control final.',['Montaje y nivelación','Conexiones y pruebas','Entrega con checklist']]],
nec:[['Terreno',['Ubicación y acceso','Medidas y condiciones','Fotos o video']],['Servicios',['Luz, agua y gas (si aplica)','Puntos de conexión','Alternativas: solar, tanque']],['Permisos',['Municipio o comuna','Requisitos de base','Documentación solicitada']]],
faq:[['¿Necesito platea o fundación sí o sí?','Depende del terreno, el modelo y la normativa local. Puede ser platea, pilotes o una solución equivalente, y se define en la etapa técnica.'],
['¿Cómo se manejan las instalaciones?','En fábrica se dejan listas las canalizaciones y los puntos internos; en el terreno se conectan a la acometida. Si no hay servicios, se evalúan alternativas.'],
['¿Cuánto tarda todo el proceso?','El objetivo es 60 a 90 días. Varía según modelo, permisos, base y logística, y la cotización incluye un cronograma estimativo.'],
['¿Se puede personalizar?','Sí. Se trabaja un anteproyecto para cerrar layout y estética, y luego se congela lo necesario para fabricar sin retrabajos.'],
['¿Qué pasa el día del montaje?','Se coordina el acceso y la grúa, se posiciona y nivela el módulo, se conectan los servicios y se entrega con checklist.']]};
window.AH.renta={ocup:55,costos:30,obra:8000,noche:{c15:45,c30:70,c30t:85,c36:80,c45:95,c60:120,c90:150}};/* SUPUESTOS DE EJEMPLO: validar con Mariano (tarifas por noche, ocupación, costos y obra civil por módulo) */
