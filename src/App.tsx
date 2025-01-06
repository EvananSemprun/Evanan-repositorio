import './App.css';
import Skill from './Components/Skill';
import { IconPhoto, IconMessageCircle } from '@tabler/icons-react';
import { Card, Image, Text, Group, Title, Tabs, Grid } from '@mantine/core';

function App() {
  return (
    <>
      <div className="container">
        <Card
          shadow="sm"
          p="lg"
          radius="md"
          withBorder
          className="card"
        >
          <Group
            align="stretch"
            spacing="xl"
            className="group"
          >
            <div className="image-container">
              <Image
                radius="md"
                src="/eva.jpg"
                alt="Imagen aleatoria"
                className="image"
              />
            </div>

            <Tabs
              color="yellow"
              radius="xs"
              orientation="horizontal"
              defaultValue="gallery"
              className="tabs"
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
                <Group mt={5} mb={5} position="apart">
                  <Title order={2}>Evanan Semprun</Title>
                  <Title c="gray" order={6}>Programador Frontend</Title>
                </Group>
                <Text fz="lg" className="description-text">
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
                      className="card-item"
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
                      className="card-item"
                    >
                      10 proyectos participados
                    </Card>
                  </Grid.Col>
                </Grid>
              </Tabs.Panel>

              <Tabs.Panel value="yes" pl="xs">
                <Text fz="md" className="about-text">
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
