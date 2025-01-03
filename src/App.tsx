import './App.css';
import Skill from './Components/Skill';
import { IconPhoto, IconMessageCircle } from '@tabler/icons-react';
import { Card, Image, Text, Group, Title, Tabs, Grid } from '@mantine/core';

function App() {
  return (
    <>
      <div style={{ margin: '0 auto', maxWidth: '90%', width: 800 }}>
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          style={{
            margin: '1rem auto',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
          }}
        >
          <Group
            align="stretch"
            spacing="xl"
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'nowrap',
              width: '100%',
            }}
          >
            <div style={{ flexShrink: 0, width: '35%', height: '100%' }}>
              <Image
                radius="md"
                src="/eva.jpg"
                alt="Imagen aleatoria"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <Tabs
              color="yellow"
              radius="xs"
              orientation="horizontal"
              defaultValue="gallery"
              style={{ flex: 1, paddingLeft: '1rem' }}
            >
              <Tabs.List>
                <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>
                  Presentacion
                </Tabs.Tab>

                <Tabs.Tab value="yes" icon={<IconMessageCircle size={14} />}>
                  Sobre mi
                </Tabs.Tab>
              </Tabs.List>

              <Tabs.Panel value="gallery" pl="xs">
                <Group mt={5} mb={5} position='apart'>

                  <Title order={2}>Evanan Semprun</Title>
                  <Title c='gray' order={6}>Programador Frontend</Title>
                </Group>
                <Text
                  fz="lg"
                  style={{
                    textAlign: 'justify',
                  }}
                >
                  <span style={{ color: "red" }}>2 </span>
                  Años de experiencia como Programador Frontend en Venezuela.
                  Especializado en la resolución de bugs y creación de páginas web totalmente responsivas.
                </Text>

              </Tabs.Panel>

              <Tabs.Panel value="messages" pl="xs">

                <Title order={2}>
                  <span style={{ color: "red" }}>2</span> Años de experiencia
                </Title>
                <Grid>
                  <Grid.Col span={4}>
                    <Card
                      shadow="sm"
                      p="lg"
                      radius="md"
                      withBorder
                      style={{
                        margin: '1rem auto',
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '100%',
                        width: '100%',
                      }}
                    >
                      s
                    </Card>

                  </Grid.Col>

                  <Grid.Col span={4}>
                    <Card
                      shadow="sm"
                      p="lg"
                      radius="md"
                      withBorder
                      style={{
                        margin: '1rem auto',
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '100%',
                        width: '100%',
                      }}
                    >
                      10 proyectos participados
                    </Card>
                  </Grid.Col>
                </Grid>
              </Tabs.Panel>

              <Tabs.Panel value="yes" pl="xs">
                <Text fz="md" style={{ textAlign: 'center' }}>
                  Ingeniero en Computación con sólidos conocimientos en desarrollo de software y sistemas informáticos.
                  Interesado en redes y seguridad informática, con experiencia en el diseño, implementación y mantenimiento de soluciones tecnológicas.
                  Destacado por la habilidad para trabajar en equipo, resolver problemas de manera eficiente y adaptarse a entornos dinámicos y cambiantes.
                </Text>
              </Tabs.Panel>

            </Tabs>
          </Group>
        </Card>
      </div>

      <Skill />
    </>
  );
}

export default App;
