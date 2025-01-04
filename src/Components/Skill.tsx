import { Grid, Card, Group, Image } from '@mantine/core';

function Skill() {
  return (
    <Group
      spacing="lg"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
      }}
    >
      <div style={{ flex: '1 1 60%', maxWidth: '60%' }}>
        <Grid gutter="lg">
          {[
            '/html.png',
            '/js.png',
            '/react.png',
            '/ts.png',
            '/c.png',
            'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80',
          ].map((src, index) => (
            <Grid.Col key={index} xs={6} sm={4} md={3} lg={2.4}>
              <Card
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center', // Centra contenido vertical y horizontalmente
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: '80%', // Ajusta según el tamaño deseado
                    aspectRatio: '1', // Relación de aspecto 1:1
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderRadius: '8px',
                  }}
                >
                  <Image
                    src={src}
                    alt={`Image ${index + 1}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain', // Usa 'contain' para que las imágenes mantengan proporciones
                    }}
                  />
                </div>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </div>
      <Card
        shadow="sm"
        p="lg"
        radius="md"
        withBorder
        style={{
          flex: '1 1 35%',
          maxWidth: '35%',
          margin: '1rem auto',
        }}
      >
        <div>
          <h3>Información</h3>
          <p>Añade aquí detalles adicionales.</p>
        </div>
      </Card>
    </Group>
  );
}

export default Skill;
