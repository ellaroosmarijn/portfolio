/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {
      id: 1,
      name: 'TwoMindsOne',
      project_type: 'solo',
      link: '#',
      github: '#',
      date_completed: '3rd of May 2023',
      image: 'image.png',
    },
    {
      id: 2,
      name: 'Collectify',
      project_type: 'group',
      link: '#',
      github: '#',
      date_completed: '15th of May 2023',
      image: 'image.png',
    },
    {
      id: 3,
      name: 'AnimateMe',
      project_type: 'solo',
      link: '#',
      github: '#',
      date_completed: '7th of May 2023',
      image: 'image.png',
    },
    {
      id: 4,
      name: 'Gallerina',
      project_type: 'group',
      link: '#',
      github: '#',
      date_completed: 'sometime in April 2023',
      image: 'image.png',
    },
  ])
}
