import Header from './componets/header.jsx';
import TextWithSearchField from './componets/textTitle.jsx';
import MusicCard from './componets/musicCard.jsx';
import Footer from './componets/footer.jsx';
import styled from "styled-components";


const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  width: 20rem;
  margin: 10px;
  background: #e6e6e6;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: #262626;
  }
`;

function App() {
  return (
    <div className="App">
      <Header />
      <TextWithSearchField />
      <div style={{paddingLeft: "9.6%",paddingBottom:20}}><Input type="text" placeholder="Search..." name="search" /><br></br></div>
      <MusicCard />
      <Footer />
    </div>
  );
}

export default App;
