import WelcomeMessage from "./WelcomeMessage"
import Counter from "./Counter"

export default function Page() {
  return (
    <main>
      <WelcomeMessage name="Kiên" role="Học viên"/>
      <WelcomeMessage name="Gemini" role="Gia sư"/>
      <hr style={{margin: '20px 0'}}/>
      <h3>Bộ đếm thứ nhất:</h3>
      <Counter />
      <hr style={{margin: '20px 0'}}/>
      <h3>Bộ đếm thứ hai:</h3>
      <Counter />
    </main>
  )
}
