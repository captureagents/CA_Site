import { Grid, Text, Container, Title, Image, Button } from '@mantine/core';

const SectionThree = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-three">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image src={require('../Images/lime-bicycle-riding.png')} alt={'sample2'} style={{ width: '100%' }} />
                    </Grid.Col>
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>Save Time, Save Money</Title>
                                Forget Open Houses. Give prospective homeowners an opportunity to experience virtual properties! (Placeholder text) 
                            </Text>
                        </div>
                        <Button color="yellow">Tell me more</Button>
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    );

};

export default SectionThree;