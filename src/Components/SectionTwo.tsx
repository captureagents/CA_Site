import { Title, Text, Container, Grid, Image, Button } from '@mantine/core';

const SectionTwo = () => {
    //const theme = useMantineTheme();

    return (
        <section id="section-two">
            <Container>
                <Grid justify="space-around">
                    <Grid.Col xs={6} sm={8} md={8} lg={8}>
                        <div style={{ marginBottom: 20 }}>
                            <Text color="black">
                                <Title order={1}>Capture Attention</Title>
                                Boost engagement on your listing. Here's more reasons why...
                            </Text>
                        </div>
                        <Button color="yellow">Check it out</Button>
                    </Grid.Col>
                    <Grid.Col xs={6} sm={4} md={4} lg={4}>
                        <Image src={require('../Images/lime-surfing.png')} alt={'sample1'} style={{ width: '100%' }} />
                    </Grid.Col>
                </Grid>
            </Container>
        </section>
    )
};

export default SectionTwo;