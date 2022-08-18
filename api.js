const res = [
  {id: 0, title: 'Curso 1', schoolarshipLevel: 'Ensino fundamental completo', difficultyLevel: 'Intermediário', macroArea: 'Gestão ágil'},
  {id: 1, title: 'Curso 2', schoolarshipLevel: 'Ensino fundamental incompleto', difficultyLevel: 'Iniciante', macroArea: 'Desenvolvimento (Development)'},
  {id: 2, title: 'Curso 3', schoolarshipLevel: 'Ensino médio completo', difficultyLevel: 'Avançado', macroArea: 'Educação Financeira'},
  {id: 3, title: 'Curso 4', schoolarshipLevel: 'Ensino médio incompleto', difficultyLevel: 'Iniciante', macroArea: 'Trading'},
  {id: 4, title: 'Curso 5', schoolarshipLevel: 'Graduação completa', difficultyLevel: 'Avançado', macroArea: 'Gestão ágil'},
  {id: 5, title: 'Curso 6', schoolarshipLevel: 'Graduação incompleta', difficultyLevel:'Iniciante', macroArea: 'Computação em nuvem (Cloud Computing)'},
  {id: 6, title: 'Curso 7', schoolarshipLevel: 'Pós Graduação', difficultyLevel:'Intermediário', macroArea: 'Ciência de Dados (Data science)'},
  {id: 7, title: 'Curso 8', schoolarshipLevel: 'Mestrado', difficultyLevel:'Iniciante', macroArea: 'Gestão ágil'},
  {id: 8, title: 'Curso 9', schoolarshipLevel: 'Graduação completa', difficultyLevel:'Intermediário', macroArea: 'Cibersegurança'},
  {id: 9, title: 'Curso 10', schoolarshipLevel: 'Ensino fundamental incompleto', difficultyLevel:'Avançado', macroArea: 'Gestão de TI'},
  {id: 10, title: 'Curso 11', schoolarshipLevel: 'Ensino médio incompleto', difficultyLevel:'Iniciante', macroArea: 'Inteligência Artificial (Machine Learning)'},
  {id: 11, title: 'Curso 12', schoolarshipLevel: 'Ensino fundamental completo', difficultyLevel:'Avançado', macroArea: 'Desenvolvimento (Development)'},
  {id: 12, title: 'Curso 13', schoolarshipLevel: 'Pós Graduação', difficultyLevel:'Iniciante', macroArea: 'Ciência de Dados (Data science)'},
  {id: 13, title: 'Curso 14', schoolarshipLevel: 'Graduação completa', difficultyLevel:'Avançado', macroArea: 'Trading'},
  {id: 14, title: 'Curso 15', schoolarshipLevel: 'Pós Graduação', difficultyLevel:'Intermediário', macroArea: 'Experiência e sucesso do cliente (CX)'},
  {id: 15, title: 'Curso 16', schoolarshipLevel: 'Ensino fundamental incompleto', difficultyLevel: 'Iniciante', macroArea: 'Cibersegurança'},
  {id: 16, title: 'Curso 17', schoolarshipLevel: 'Pós Graduação', difficultyLevel: 'Iniciante', macroArea: 'Gestão de TI'},
  {id: 17, title: 'Curso 18', schoolarshipLevel: 'Ensino médio incompleto', difficultyLevel: 'Avançado', macroArea: 'Criptomoeda'},
  {id: 18, title: 'Curso 19', schoolarshipLevel: 'Graduação incompleta', difficultyLevel:'Intermediário', macroArea: 'Criptomoeda'},
  {id: 19, title: 'Curso 20', schoolarshipLevel: 'Mestrado', difficultyLevel: 'Iniciante', macroArea: 'Educação Financeira'},
  {id: 20, title: 'Curso 21', schoolarshipLevel: 'Pós Graduação', difficultyLevel: 'Intermediário', macroArea: 'Investimentos'},
  {id: 21, title: 'Curso 22', schoolarshipLevel: 'Pós Graduação', difficultyLevel: 'Avançado', macroArea: 'Trading'},
]

const api = {
    async get(){
        return Promise.resolve(res)
    }
}