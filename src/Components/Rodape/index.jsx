import './rodape.css';

export default function Rodape() {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <p>&copy; Rodrigo Serrasqueiro - {year}. Todos os direitos reservados</p>
        </footer>
    )
}