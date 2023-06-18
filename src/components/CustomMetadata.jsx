import Head from 'next/head'
import Icon from '@/assets/favicon.ico'

/**
 * @param title {string} - Título de la página, por defecto lleva el título 'Principal'.
 * @param description {string} - Descripción de la página.
 * @param keywords {Array} - Palabras claves que describen el proyecto. Todo en un array de strings.
 * @param author {string} - Autor de la página, por defecto el nombre del equipo 'Bink'.
 */
const CustomMetadata = ({
  title = 'Principal',
  description = 'Página informativa del Banco Universitario',
  keywords = ['web', 'banco', 'universidad', 'bink'],
  author = 'Bink'
}) => {

  const keys = keywords?.join(', ') ?? ['web']

  return (
    <Head>
      <title>{title} - Banco Universitario</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keys} />
      <meta name='author' content={author} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <link rel='icon' href='/favicon.ico'/>
    </Head>
  )
}

export default CustomMetadata