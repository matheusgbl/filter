const res = [
  {id: 0, key: 'efc', title: 'Curso 1', schoolarshipLevel: 'Ensino fundamental completo'},
  {id: 1, key: 'efi', title: 'Curso 2', schoolarshipLevel: 'Ensino fundamental incompleto'},
  {id: 2, key: 'emc', title: 'Curso 3', schoolarshipLevel: 'Ensino médio completo'},
  {id: 3, key: 'emi', title: 'Curso 4', schoolarshipLevel: 'Ensino médio incompleto'},
  {id: 4, key: 'gc', title: 'Curso 5', schoolarshipLevel: 'Graduação completa'},
  {id: 5, key: 'gi', title: 'Curso 6', schoolarshipLevel: 'Graduação incompleta'},
  {id: 6, key: 'pg', title: 'Curso 7', schoolarshipLevel: 'Pós Graduação'},
  {id: 7, key: 'm', title: 'Curso 8', schoolarshipLevel: 'Mestrado'},
  {id: 8, key: 'gc', title: 'Curso 9', schoolarshipLevel: 'Graduação completa'},
  {id: 9, key: 'efi', title: 'Curso 10', schoolarshipLevel: 'Ensino fundamental incompleto'},
  {id: 10, key: 'emi', title: 'Curso 11', schoolarshipLevel: 'Ensino médio incompleto'},
  {id: 11, key: 'efc', title: 'Curso 12', schoolarshipLevel: 'Ensino fundamental completo'},
  {id: 12, key: 'pg', title: 'Curso 13', schoolarshipLevel: 'Pós Graduação'},
  {id: 13, key: 'gc', title: 'Curso 14', schoolarshipLevel: 'Graduação completa'},
  {id: 14, key: 'pg', title: 'Curso 15', schoolarshipLevel: 'Pós Graduação'},
  {id: 15, key: 'efi', title: 'Curso 16', schoolarshipLevel: 'Ensino fundamental incompleto'},
  {id: 16, key: 'pg', title: 'Curso 17', schoolarshipLevel: 'Pós Graduação'},
  {id: 17, key: 'emi', title: 'Curso 18', schoolarshipLevel: 'Ensino médio incompleto'},
  {id: 18, key: 'gi', title: 'Curso 19', schoolarshipLevel: 'Graduação incompleta'},
  {id: 19, key: 'm', title: 'Curso 20', schoolarshipLevel: 'Mestrado'},
  {id: 20, key: 'pg', title: 'Curso 21', schoolarshipLevel: 'Pós Graduação'},
  {id: 21, key: 'pg', title: 'Curso 22', schoolarshipLevel: 'Pós Graduação'},
]

const api = {
    async get(){
        return Promise.resolve(res)
    }
}