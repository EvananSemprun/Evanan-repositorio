import { Grid, Card, Group, Image, Button, Title } from '@mantine/core';

function Skill() {
  return (
    <Group
      mr={45}
      position='center'
      ml={45}
      mt={35}
      spacing="lg"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ flex: '1 1 60%', maxWidth: '60%', justifyContent: 'center' }}>
        <Title ta='center' order={2}>Habilidades tecnológicas</Title>
        <Grid gutter="lg">
          {['/js.png', '/react.png', '/ts.png', '/c.png'].map((src, index) => (
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
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <div
                  style={{
                    width: '80%',
                    aspectRatio: '1',
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
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </div>

      <div style={{ flex: '1 1 40%', display: 'flex', justifyContent: 'center' }}>
        <Button
          radius="lg"
          size="lg"
          style={{
            backgroundColor: '#e5b501',
            color: '#fff',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#c89f00';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#e5b501';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Descargar CV
        </Button>

      </div>
    </Group>
  );
}

export default Skill;
