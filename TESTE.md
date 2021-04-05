# SELEÇÃO

Gostaríamos de conhecer um pouco mais sobre a sua forma de codificação, entender como você pensa, e, também, conseguirmos conversar sobre um projeto seu desenvolvido.

Então, queremos propor um projeto para desenvolvimento, utilizando Node e React, no qual você será livre para estruturá-lo.

## AVALIAÇÃO

A nossa avaliação se baseará na forma como você disponibiliza o produto, bem como na forma como você o documentou, garantindo que esteja aderente a nossa matriz de pensamento e que todos possam contribuir constantemente na posterioridade.

O intuito da avaliação não é o desenvolvimento completo de todas as _features_, mas sim a forma como você se porta neste desenvolvimento. Trazemos aqui um escopo amplo e de certa forma complexo, permitindo que você aplique sua criatividade e também justifique as tomadas de decisão no desenvolvimento. Portanto não se prenda no desenvolvimento de todas as _features_, mas sim na estruturação do sistema (:

Revisaremos seu código, nos atentando à:

- Organização
- Arquitetura
- Coesão
- Clareza
- Documentação - Instruções claras para execução
- Versionamento
- Testes Automatizados
- Consumo da API RESTful - GraphQL
- Estruturação dos componentes
- Princípios de desenvolvimento

Ainda, pretendemos durante a nossa conversa pessoal, avaliar também:

- Sua posição sobre o código desenvolvido
- Postura de comunicação
- Argumentação

Temos como objetivo desta avaliação compreender a sua prática e vivência no desenvolvimento, avaliando não somente aspectos técnicos, mas também comportamentais, tentando trazer uma aproximação de uma experiência de trabalho com você.

Não queremos que você perca tempo estudando tecnologias ou estruturas nas quais você não possua familiaridade, gostaríamos que você fosse honesto consigo mesmo e trabalhe dentro do limite de seu conhecimento, se não estiver confortável com a abordagem acima, proponha algo diferente que avaliaremos durante a entrevista pessoal. Qualquer dúvida que tenha durante o desenvolvimento, não deixe de nos contatar.

Gostaríamos que você nos retorna-se no prazo de até uma semana, porém, se não for possível, podemos combinar um prazo mais agradável.

## O PROJETO

### PRONTUÁRIO MÉDICO

Prontuário médico são todas as informações clínicas registradas de uma pessoa. As informações normalmente são Atestados, Exames, Laudos, Prescrições Médicas, entre outras, que permitem aos médicos compreender o histórico clínico deste paciente.

#### CASO DE USO

Precisamos de um sistema para gerenciar os exames realizados por cada médicos em nosso sistema. Para isso, os médicos precisaram se cadastrar, onde será permitido registrar novos pacientes e cadastrar os exames que foram realizados para esse paciente.

#### REQUISITOS

Deve-se criar uma aplicação web onde podemos:

- Autenticação e autorização de usuário;
- Registrar os pacientes atendidos;
- Buscar todos pacientes cadastrados;
- Gerenciar exames realizados para cada paciente;

#### SERVIÇO

- Deverá ser criado um Serviço em NodeJS que irá prover as informações das entidades;
- Este serviço deverá ser acessível via REST ou GraphQL (recomendamos GraphQL);
- O banco de dados pode ser a sua escolha (recomendamos Postgres);
- A utilização de ORM é opcional, porém recomendada;

#### ENTIDADES

- Usuário
  - id
  - email
  - senha
- Prontuário
  - id
  - nome
  - cpf
  - sexo
  - data de nascimento
  - usuario de inclusao
  - usuario de alteracao
- Exame
  - id
  - data de realizacao
  - descricao
  - usuario de inclusao

#### HISTÓRIAS DE USUÁRIO

1. Autenticação de usuário

> Gostaria que os médicos pudessem se cadastrar e fazer login no sistema. A visualização de prontuários deve ser por quantidade de atendimento deste médico, sendo exibido na parte superior os pacientes com mais atendimentos deste médico.

Você pode criar a sua autenticação de usuário ou utilizar alguma outra, como do Facebook, por exemplo.

2. Buscar paciente

> Ao receber um paciente no consultório, gostaria de procurá-lo por nome ou C.P.F., permitindo registrar um novo cadastro caso ele ainda não tenha sido incluído.

A forma de pesquisa deve funcionar com sequências de caracteres, ou seja, ao digitar `ti`, deverá aparecer tanto `Tiago` quanto `Tatiane`.

Deve ser criado um serviço que permita a busca e registro dessas informações destas informações, lembrando que as informações devem ser trazidas conforme o usuário autenticado.

Você pode utilizar tanto os verbos HTTPS com RESTful ou utilizar a comunicação com o GraphQL.

3. Adicionar exames ao prontuário

> Durante o atendimento, os médicos podem registrar exames realizados durante a consulta.

As informações podem ser textuais ou sugeridas para o usuário;

4. Gerenciamento das informações

> Os médicos poderão alterar e excluir as informações dos prontuários e exames realizados.

A alteração das informações deve ser de forma a não descaracterizar a pessoal (alteração de C.P.F., por exemplo) e é permitida para qualquer médico. Já as informações de exames somente podem ser alteradas e excluídas pelo médico que o criou, somente sendo visualizadas pelos outros médicos.

Lembrando que somente serão excluídos prontuários sem exames (:

Caso tenha alguma outra ideia ou até um projeto já pronto semelhante a isto, compartilhe conosco!

## COMO COMPARTILHAR O PROJETO CONOSCO

1. Crie um repositório privado no Github e compartilhe com nossa conta do [Github](https://github.com/nginformatica), se não conseguir, pode nos responder por e-mail que entraremos em contato para solicitar o compartilhamento;
2. Abra um PR apontando para a branch master deste repositório;
3. Você pode nos solicitar a revisão sempre que quiser;
4. Ao final, coloque todas as considerações que julgar importante sobre seu código.
