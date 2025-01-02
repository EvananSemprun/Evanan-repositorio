import './App.css';
import { IconPhoto, IconMessageCircle } from '@tabler/icons-react';
import { Card, Image, Text, Group, Title, Tabs } from '@mantine/core';

function App() {
  return (
    
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
                Sobre mi
              </Tabs.Tab>
              <Tabs.Tab value="messages" icon={<IconMessageCircle size={14} />}>
                Datos relevantes
              </Tabs.Tab>
              <Tabs.Tab value="yes" icon={<IconMessageCircle size={14} />}>
                Informacion de contacto
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pl="xs">
              <Title order={2}>Evanan Semprun</Title>
              <Text
                fz="md"
                style={{
                  textAlign: 'justify',
                }}
              >
                Ingeniero en Computación con sólidos conocimientos en desarrollo de
                software, sistemas informáticos, redes y seguridad informática.
                Experiencia en el diseño, implementación y mantenimiento de soluciones
                tecnológicas. Habilidad para trabajar en equipo, resolver problemas de
                manera eficiente y adaptarse a entornos cambiantes.
              </Text>
            </Tabs.Panel>

            <Tabs.Panel value="messages" pl="xs">
              <Text fz="md" style={{ textAlign: 'center' }}>
                ¡Bienvenido a la sección de mensajes! Aquí puedes ver tus comunicaciones
                recientes.
              </Text>
            </Tabs.Panel>

            <Tabs.Panel value="yes" pl="xs">
              <Text fz="md" style={{ textAlign: 'center' }}>
                ¡Bienvenido a la sección de mensajes! Aquí puedes ver tus comunicaciones
                recientes.
              </Text>
            </Tabs.Panel>

          </Tabs>
        </Group>
      </Card>
    </div>
  );
}

export default App;
