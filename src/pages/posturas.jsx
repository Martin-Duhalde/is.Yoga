import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const posturas = [
  {
    nombre: "Adho Mukha Svanasana",
    archivo: "adho-mukha-svanasana 1.jpg",
    descripcion:
      "Conocida como la postura del perro boca abajo, esta asana es fundamental en muchas secuencias de yoga. Estira y fortalece todo el cuerpo, especialmente los hombros, isquiotibiales, pantorrillas y la columna vertebral. Además, mejora la circulación sanguínea hacia el cerebro, lo que ayuda a calmar la mente y aliviar el estrés. Es excelente para aliviar la fatiga y revitalizar el cuerpo.",
  },
  {
    nombre: "Ardha Chandrasana",
    archivo: "ardha-chandrasana.jpg",
    descripcion:
      "La postura de la media luna es una asana de equilibrio que fortalece las piernas, los glúteos y el abdomen. También mejora la coordinación y la concentración. Al abrir el pecho y los hombros, ayuda a mejorar la postura y la respiración. Es ideal para desarrollar la estabilidad y la confianza en uno mismo.",
  },
  {
    nombre: "Astavakrasana",
    archivo: "astavakrasana.jpg",
    descripcion:
      "Esta postura desafiante de equilibrio sobre los brazos fortalece los músculos del core, los brazos y las muñecas. Además, mejora la concentración y la determinación. Al practicarla, se desarrolla una mayor conciencia corporal y control sobre el movimiento. Es una asana avanzada que simboliza la superación de obstáculos.",
  },
  {
    nombre: "Baddha Konasana",
    archivo: "baddha-konasana.jpg",
    descripcion:
      "También conocida como la postura del zapatero, esta asana abre las caderas y estira los músculos internos de los muslos. Es beneficiosa para mejorar la flexibilidad de la zona pélvica y aliviar el estrés. Además, puede ayudar a aliviar las molestias menstruales y preparar el cuerpo para el parto.",
  },
  {
    nombre: "Bakasana",
    archivo: "bakasana.jpg",
    descripcion:
      "La postura del cuervo es una asana de equilibrio sobre los brazos que fortalece las muñecas, los brazos y el abdomen. Mejora la concentración y la coordinación. Al practicarla, se desarrolla la confianza y el coraje para enfrentar desafíos tanto en la esterilla como en la vida diaria.",
  },
  {
    nombre: "Balasana",
    archivo: "balasana-postura-niño.jpg",
    descripcion:
      "Conocida como la postura del niño, es una asana de descanso que ayuda a relajar el cuerpo y la mente. Estira suavemente la espalda, las caderas y los muslos. Es ideal para aliviar el estrés y la fatiga, y se utiliza comúnmente entre posturas más exigentes para recuperar el aliento.",
  },
  {
    nombre: "Bhujangasana",
    archivo: "bhujangasana-postura-cobra-yoga.jpg",
    descripcion:
      "La postura de la cobra fortalece la columna vertebral y abre el pecho y los pulmones. Es beneficiosa para aliviar el dolor de espalda y mejorar la postura. Además, estimula los órganos abdominales y puede ayudar a aliviar el estrés y la fatiga. :contentReference[oaicite:1]{index=1}",
  },
  {
    nombre: "Bitilasana",
    archivo: "bitilasana-postura-vaca.jpg",
    descripcion:
      "La postura de la vaca es una asana suave que se realiza en combinación con Marjaryasana (postura del gato) para calentar la columna vertebral. Mejora la flexibilidad de la columna, estira el cuello y el torso, y promueve una respiración profunda y consciente. Es ideal para iniciar una práctica de yoga.",
  },
  {
    nombre: "Chaturanga Dandasana",
    archivo: "chaturanga-dandasana.jpg",
    descripcion:
      "Esta postura, similar a una flexión de brazos, fortalece los brazos, los hombros, el abdomen y las piernas. Es fundamental en las secuencias de vinyasa y requiere una alineación precisa para evitar lesiones. Mejora la resistencia y prepara el cuerpo para posturas más avanzadas. :contentReference[oaicite:2]{index=2}",
  },
  {
    nombre: "Dhanurasana",
    archivo: "dhanurasana.jpg",
    descripcion:
      "La postura del arco estira todo el cuerpo, especialmente el pecho, el abdomen, los muslos y los tobillos. Fortalece la espalda y mejora la postura. Además, estimula los órganos abdominales y puede ayudar a aliviar el estrés y la fatiga. :contentReference[oaicite:3]{index=3}",
  },
  {
    nombre: "Garudasana",
    archivo: "garudasana.jpg",
    descripcion:
      "Conocida como la postura del águila, esta asana mejora el equilibrio y la concentración. Estira los hombros, las caderas y los muslos, y fortalece los músculos de las piernas y los tobillos. También ayuda a mejorar la coordinación y la conciencia corporal. :contentReference[oaicite:4]{index=4}",
  },
  {
    nombre: "Halasana",
    archivo: "halasana-1.jpg",
    descripcion:
      "La postura del arado estira la columna vertebral y los hombros, y calma el sistema nervioso. Es beneficiosa para aliviar el estrés y mejorar la flexibilidad de la espalda. Además, estimula los órganos abdominales y puede ayudar a mejorar la digestión. :contentReference[oaicite:5]{index=5}",
  },
  {
    nombre: "Janu Sirsasana",
    archivo: "janu-sirsasana.jpg",
    descripcion:
      "Esta postura de flexión hacia adelante estira la columna vertebral, los hombros, los isquiotibiales y la ingle. Calma la mente y alivia la ansiedad. También estimula el hígado y los riñones, y puede mejorar la digestión.",
  },
  {
    nombre: "Koundinyasana",
    archivo: "koundinyasana.jpg",
    descripcion:
      "Una postura de equilibrio sobre los brazos que fortalece los músculos del core, los brazos y las muñecas. Mejora la concentración y la determinación. Al practicarla, se desarrolla una mayor conciencia corporal y control sobre el movimiento.",
  },
  {
    nombre: "Malasana",
    archivo: "malasana.jpg",
    descripcion:
      "La postura de la guirnalda es una sentadilla profunda que abre las caderas y estira los tobillos y la espalda baja. Mejora la digestión y fortalece el abdomen. Es ideal para preparar el cuerpo para posturas de meditación y aliviar la tensión en la zona lumbar.",
  },
  {
    nombre: "Marjaryasana",
    archivo: "marjaryasana-postura-gato.jpg",
    descripcion:
      "La postura del gato se realiza en combinación con Bitilasana (postura de la vaca) para calentar la columna vertebral. Mejora la flexibilidad de la columna, estira el cuello y el torso, y promueve una respiración profunda y consciente. Es ideal para iniciar una práctica de yoga.",
  },
  {
    nombre: "Matsyasana",
    archivo: "matsyasana.jpg",
    descripcion:
      "La postura del pez estira el pecho, el cuello y los hombros, y fortalece los músculos de la parte superior de la espalda y el cuello. Es beneficiosa para aliviar la tensión en los hombros y el cuello, y para mejorar la postura. También estimula los órganos abdominales y la garganta.",
  },
  {
    nombre: "Navasana",
    archivo: "navasana.jpg",
    descripcion:
      "La postura del bote fortalece los músculos del abdomen, la columna vertebral y las caderas. Mejora el equilibrio y la concentración. Al practicarla, se desarrolla una mayor conciencia corporal y control sobre el movimiento.",
  },
  {
    nombre: "Padmasana",
    archivo: "padmasana.jpg",
    descripcion:
      "Conocida como la postura del loto, es una asana de meditación que promueve la calma y la concentración. Abre las caderas y estira las rodillas y los tobillos. Es ideal para prácticas de meditación y pranayama.",
  },
  {
    nombre: "Parsvakonasana",
    archivo: "parsvakonasana.jpg",
    descripcion:
      "La postura del ángulo lateral extendido estira y fortalece las piernas, las caderas y la columna vertebral. Abre el pecho y los hombros, y mejora el equilibrio y la resistencia. Es beneficiosa para mejorar la digestión y aliviar el estrés.",
  },
  {
    nombre: "Parsvottanasana",
    archivo: "parsvottanasana.jpg",
    descripcion:
      "La postura de la pirámide estira los isquiotibiales, las caderas y la columna vertebral. Mejora el equilibrio y la postura. También calma la mente y alivia el estrés.",
  },
  {
    nombre: "Paschimottanasana",
    archivo: "paschimottanasana.jpg",
    descripcion:
      "La flexión hacia adelante sentado estira la columna vertebral, los hombros y los isquiotibiales. Calma la mente y alivia la ansiedad. También estimula el hígado, los riñones y mejora la digestión.",
  },
  {
    nombre: "Pincha Mayurasana",
    archivo: "pincha-mayurasana.jpg",
    descripcion:
      "La postura del pavo real emplumado es una inversión que fortalece los hombros, los brazos y el core. Mejora el equilibrio y la concentración. Al practicarla, se desarrolla una mayor conciencia corporal y control sobre el movimiento.",
  },
  {
    nombre: "Prasarita Padottanasana",
    archivo: "prasarita-padottanasana.jpg",
    descripcion:
      "La flexión hacia adelante con las piernas separadas estira los isquiotibiales, las pantorrillas y la columna vertebral. Calma la mente y alivia el estrés. También fortalece las piernas y mejora la postura.",
  },
  {
    nombre: "Sarvangasana",
    archivo: "sarvangasana.jpg",
    descripcion:
      "La postura sobre los hombros, conocida como la reina de las asanas. Estimula la glándula tiroides, mejora la circulación y calma el sistema nervioso. Estira la nuca y fortalece los hombros. Ayuda con problemas de insomnio y ansiedad al inducir un estado de calma profunda.",
  },
  {
    nombre: "Savasana",
    archivo: "savasana.jpg",
    descripcion:
      "La postura del cadáver es una de las más importantes para cerrar la práctica. Aunque parece simple, enseña a soltar completamente las tensiones físicas y mentales. Promueve la integración de los beneficios de la clase y ayuda a reducir el estrés. Mejora la concentración y cultiva la consciencia del momento presente.",
  },
  {
    nombre: "Shanti Virabhadrasana",
    archivo: "shanti-virabhadrasana.jpg",
    descripcion:
      "Una variación de los guerreros que combina fuerza y gracia. Fortalece piernas y glúteos, mientras abre el pecho y mejora la postura. Fomenta la concentración, la conexión interna y el equilibrio emocional. Es ideal para cultivar una actitud de presencia tranquila pero firme.",
  },
  {
    nombre: "Sirsasana",
    archivo: "sirsasana.jpg",
    descripcion:
      "La postura sobre la cabeza, conocida como el rey de las asanas. Invierte el flujo sanguíneo, favoreciendo la oxigenación del cerebro. Fortalece brazos, hombros y core, a la vez que desarrolla equilibrio y confianza. Ayuda a reducir el estrés y mejora la función mental si se practica con cuidado.",
  },
  {
    nombre: "Sukhasana",
    archivo: "sukhasana.jpg",
    descripcion:
      "También conocida como postura fácil. Ideal para la meditación y la respiración consciente. Abre suavemente las caderas y mejora la alineación de la columna. Promueve un estado mental tranquilo y estable. Es una invitación a la presencia y la escucha interna.",
  },
  {
    nombre: "Tadasana",
    archivo: "tadasana.jpg",
    descripcion:
      "La postura de la montaña parece simple, pero activa todo el cuerpo. Mejora la postura, fortalece las piernas y crea una base firme para otras asanas. Fomenta la concentración y el arraigo. Enseña a estar presente, estable y alineado tanto física como mentalmente.",
  },
  {
    nombre: "Tolasana",
    archivo: "tolasana.jpg",
    descripcion:
      "Conocida como la postura del equilibrio con elevación en loto. Trabaja profundamente el abdomen, los brazos y los hombros. Mejora el equilibrio y la estabilidad interna. Es ideal para quienes buscan cultivar fuerza y concentración en su práctica. También ayuda a profundizar en la respiración controlada.",
  },
  {
    nombre: "Urdhva Dhanurasana",
    archivo: "urdhva-dhanurasana.jpg",
    descripcion:
      "La postura del arco hacia arriba o puente completo. Abre intensamente el pecho, estira el abdomen y fortalece brazos, piernas y espalda. Estimula el sistema nervioso y despierta energía. Es revitalizante, aunque requiere calentamiento y conciencia corporal. Ideal para contrarrestar hábitos sedentarios.",
  },
  {
    nombre: "Urdhva Mukha Svanasana",
    archivo: "urdhva-mukha-svanasana.jpg",
    descripcion:
      "La postura del perro mirando hacia arriba. Estira el pecho, los pulmones y el abdomen, mientras fortalece brazos y muñecas. Ayuda a mejorar la postura y la respiración profunda. Activa la columna y energiza el cuerpo. Muy común en transiciones dentro del vinyasa.",
  },
  {
    nombre: "Uttanasana",
    archivo: "uttanasana.jpg",
    descripcion:
      "La flexión de pie hacia adelante. Estira intensamente los isquiotibiales, pantorrillas y columna. Alivia el estrés y calma el sistema nervioso. Favorece la digestión y ayuda a aliviar dolores de cabeza si se mantiene con respiración suave. Ideal para soltar tensiones acumuladas.",
  },
  {
    nombre: "Utthita Trikonasana",
    archivo: "utthita-trikonasana-triangulo-yoga.jpg",
    descripcion:
      "La postura del triángulo extendido. Estira profundamente los lados del torso, la columna y las piernas. Mejora el equilibrio, la coordinación y fortalece los músculos posturales. Ayuda a abrir el pecho y a alinear la respiración con el movimiento. Es una postura clásica para aprender precisión y estabilidad.",
  },
  {
    nombre: "Vasisthasana",
    archivo: "vasisthasana.jpg",
    descripcion:
      "La plancha lateral fortalece brazos, muñecas y core. Mejora el equilibrio, la concentración y la confianza. Es ideal para desafiar la estabilidad interna y trabajar los oblicuos. Puede tener variaciones más accesibles o avanzadas. Es una postura poderosa para construir fuerza desde el centro.",
  },
  {
    nombre: "Virabhadrasana I",
    archivo: "virabhadrasana-I-guerrero-1.jpg",
    descripcion:
      "El Guerrero I fortalece piernas, glúteos, espalda y brazos. Abre el pecho y mejora la postura. Representa firmeza y determinación. Ayuda a centrar la mente y conectar con la respiración mientras se mantiene el equilibrio. Es ideal para desarrollar enfoque interno.",
  },
  {
    nombre: "Virabhadrasana II",
    archivo: "virabhadrasana-II-guerrero-2.jpg",
    descripcion:
      "El Guerrero II desarrolla fuerza, apertura de caderas y estabilidad. Mejora la alineación y la atención plena. Es una postura poderosa para cultivar firmeza sin rigidez. Trabaja las piernas de forma activa y mejora la conciencia del espacio. Es símbolo de claridad y propósito.",
  },
  {
    nombre: "Virabhadrasana III",
    archivo: "virabhadrasana-III.jpg",
    descripcion:
      "Guerrero III exige equilibrio, fuerza y concentración. Activa intensamente el core, glúteos y piernas. Mejora la coordinación y la conexión cuerpo-mente. Enseña a sostenerse con gracia en la inestabilidad. Es excelente para desarrollar determinación y presencia.",
  },
  {
    nombre: "Vrikshasana",
    archivo: "vrikshasana.jpg",
    descripcion:
      "La postura del árbol mejora el equilibrio y fortalece las piernas. Ayuda a estabilizar la mente y a enfocarse en el presente. Abre suavemente las caderas y estira los músculos del muslo interno. Invita a cultivar paciencia y enraizamiento. Es ideal para trabajar la estabilidad emocional desde lo físico.",
  },
];

export default function Posturas() {
  return (
    <Container sx={{ mt: 4, mb: 8 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // vertical en mobile, horizontal en desktop
          alignItems: "center",
          gap: 4,
        }}
      >
        <Box
          component="img"
          src="/tere-griscolor-der.png"
          alt="Tere"
          sx={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: 4,
            transition: "transform 0.5s ease-in-out",
            "&:hover": {
              transform: "scale(1.05) rotate(-2deg)",
            },
          }}
        />
        <Box>
          <Typography variant="h3" gutterBottom>
            Posturas
          </Typography>
          <Typography variant="body1">
            Descubrí las posturas más practicadas en yoga, su propósito y los
            beneficios que aportan a nivel físico, mental y energético.
          </Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" gap={4} mt={4}>
        {posturas.map((postura) => (
          <Card
            key={postura.nombre}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              image={`/posturas/${postura.archivo}`}
              alt={postura.nombre}
              sx={{ width: { xs: "100%", sm: 240 }, objectFit: "cover" }}
            />
            <CardContent>
              <Typography variant="h5">{postura.nombre}</Typography>
              <Typography variant="body2" color="text.secondary">
                {postura.descripcion}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
