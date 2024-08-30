import './skills.css';
import SkillsCard from './skillsCard';

import logoFront from '../../img/logo-frontend1.png';
import logoBack from '../../img/logo-backend.png';
import logoFerramentas from '../../img/logo-ferramentas.png'

export default function Skills() {
    return (
        <section className='limitar-secao secao-skills'>
            <h4>Tecnologias</h4>
            <h2>Minhas Skills</h2>
            <div className='secao-card-skills'>
                <SkillsCard
                    imagem={logoFront}
                    descricao='Front-End'
                    tecnologias={
                        ['HTML', 'CSS', 'Javascript', 'TypeScript', 'React', 'Styled-Components', 'Material UI' 
                        ]
                    }
                />

                <SkillsCard
                    imagem={logoBack}
                    descricao='Back-End'
                    tecnologias={['Node.js', 'Mongo db', 'Mysql', 'Sql']}
                />

                <SkillsCard
                    imagem={logoFerramentas}
                    descricao='Ferramentas/Plataformas'
                    tecnologias={['Git', 'GitHub']}
                />
            </div>
        </section >
    )
}