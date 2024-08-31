import { Container } from './styles'

export default function Main() {
  return (
    <Container>
      <img
        src='https://devsamurai-materials.s3.amazonaws.com/templates/avatar-gradient-dark.svg'
        height='256'
        alt='Dev Samurai'
      />
      <h1>Fala Samurai!</h1>
      <p>Esse é o template typescript básico da Dev Samurai para React.</p>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1kQ7ejTduJkj4iexvxij9JRza_6lt4eI&ehbc=2E312F" width="640" height="480"></iframe>
    </Container>
  )
}
