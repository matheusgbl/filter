const res = [
  {id: 0, key: 'efc', title: 'Curso 1', schoolarshipLevel: 'Ensino fundamental completo', difficultyLevel: 'intermadiate', macroArea: 'Gestão ágil'},
  {id: 1, key: 'efi', title: 'Curso 2', schoolarshipLevel: 'Ensino fundamental incompleto', difficultyLevel: 'beginner', macroArea: 'Desenvolvimento (Development)'},
  {id: 2, key: 'emc', title: 'Curso 3', schoolarshipLevel: 'Ensino médio completo', difficultyLevel: 'advanced', macroArea: 'Educação Financeira'},
  {id: 3, key: 'emi', title: 'Curso 4', schoolarshipLevel: 'Ensino médio incompleto', difficultyLevel: 'beginner', macroArea: 'Trading'},
  {id: 4, key: 'gc', title: 'Curso 5', schoolarshipLevel: 'Graduação completa', difficultyLevel: 'advanced', macroArea: 'Gestão Ágil'},
  {id: 5, key: 'gi', title: 'Curso 6', schoolarshipLevel: 'Graduação incompleta', difficultyLevel:'beginner', macroArea: 'Computação em nuvem (Cloud Computing)'},
  {id: 6, key: 'pg', title: 'Curso 7', schoolarshipLevel: 'Pós Graduação', difficultyLevel:'intermadiate', macroArea: 'Ciência de Dados (Data science)'},
  {id: 7, key: 'm', title: 'Curso 8', schoolarshipLevel: 'Mestrado', difficultyLevel:'beginner', macroArea: 'Gestão ágil'},
  {id: 8, key: 'gc', title: 'Curso 9', schoolarshipLevel: 'Graduação completa', difficultyLevel:'intermadiate', macroArea: 'Cibersegurança'},
  {id: 9, key: 'efi', title: 'Curso 10', schoolarshipLevel: 'Ensino fundamental incompleto', difficultyLevel:'advanced', macroArea: 'Gestão de TI'},
  {id: 10, key: 'emi', title: 'Curso 11', schoolarshipLevel: 'Ensino médio incompleto', difficultyLevel:'beginner', macroArea: 'Inteligência Artificial (Machine Learning)'},
  {id: 11, key: 'efc', title: 'Curso 12', schoolarshipLevel: 'Ensino fundamental completo', difficultyLevel:'advanced', macroArea: 'Desenvolvimento (Development)'},
  {id: 12, key: 'pg', title: 'Curso 13', schoolarshipLevel: 'Pós Graduação', difficultyLevel:'beginner', macroArea: 'Ciência de Dados (Data science)'},
  {id: 13, key: 'gc', title: 'Curso 14', schoolarshipLevel: 'Graduação completa', difficultyLevel:'advanced', macroArea: 'Trading'},
  {id: 14, key: 'pg', title: 'Curso 15', schoolarshipLevel: 'Pós Graduação', difficultyLevel:'intermadiate', macroArea: 'Experiência e sucesso do cliente (CX)'},
  {id: 15, key: 'efi', title: 'Curso 16', schoolarshipLevel: 'Ensino fundamental incompleto', difficultyLevel: 'beginner', macroArea: 'Cibersegurança'},
  {id: 16, key: 'pg', title: 'Curso 17', schoolarshipLevel: 'Pós Graduação', difficultyLevel: 'beginner', macroArea: 'Gestão de TI'},
  {id: 17, key: 'emi', title: 'Curso 18', schoolarshipLevel: 'Ensino médio incompleto', difficultyLevel: 'advanced', macroArea: 'Criptomoeda'},
  {id: 18, key: 'gi', title: 'Curso 19', schoolarshipLevel: 'Graduação incompleta', difficultyLevel:'intermadiate', macroArea: 'Criptomoeda'},
  {id: 19, key: 'm', title: 'Curso 20', schoolarshipLevel: 'Mestrado', difficultyLevel: 'beginner', macroArea: 'Educação Financeira'},
  {id: 20, key: 'pg', title: 'Curso 21', schoolarshipLevel: 'Pós Graduação', difficultyLevel: 'intermadiate', macroArea: 'Investimentos'},
  {id: 21, key: 'pg', title: 'Curso 22', schoolarshipLevel: 'Pós Graduação', difficultyLevel: 'advanced', macroArea: 'Trading'},
]

const api = {
    async get(){
        return Promise.resolve(res)
    }
}