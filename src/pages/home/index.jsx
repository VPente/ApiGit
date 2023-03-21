import { useRef, useEffect, useState } from 'react';
import { Card } from '../components/Card';
import { Wrapper } from '../components/Wrapper';
import { Header, Button, Main, Input, Title } from '../../styles/styles';

export function Home() {
  const [user, setUser] = useState({ name: '', avatar: '' }); //dados do usuario
  const [userName, setUserName] = useState(null); // estado para procurar a url do usuario
  const [userList, setUserList] = useState([]); // estado para armazenar todos os usuários adicionados
  const inputRef = useRef(null);

  function addUser() {
    setUserName(inputRef.current.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      setUserName(inputRef.current.value);
    }
  };

  useEffect(() => {
    if (userName) {
      fetch(`https://api.github.com/users/${userName}`)
        .then((response) => response.json())
        .then((data) => {
          const newUser = { name: data.name, avatar: data.avatar_url };
          if (!userList.some((user) => user.name === newUser.name)) {
            setUserList([...userList, newUser]);
          }
          setUser(newUser);
        })
        .catch((error) => {
          console.log('Erro ao buscar usuário: ', error);
        });
    }
  }, [userName, userList]);

  return (
    <Wrapper>
      <Main>
        <Header>
          <Title>Usuários Presentes</Title>
          <Input
            ref={inputRef}
            type="text"
            placeholder="Digite seu usuario GitHub..."
            onKeyDown={handleKeyDown}
          />
          <Button onClick={addUser}> Adicionar </Button>
        </Header>
        <div className="mid">
          {userList.map((user, index) => (
            <Card key={index} name={user.name} avatar={user.avatar} />
          ))}
        </div>
      </Main>
    </Wrapper>
  );
}
