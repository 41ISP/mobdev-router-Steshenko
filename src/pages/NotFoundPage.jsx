import StatusBlock from '../components/StatusBlock.jsx';
import {useLocation, useNavigate} from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate()
  const location = uselocation()

  return (
    <section className="page-shell">
      <StatusBlock
        emoji="🍂"
        title="Такой страницы нет"
        subtitle={`Путь "${path}" не совпал ни с одним маршрутом.`}
        actionLabel="Вернуться на главную"
        onAction={ () => navigate('/')}
      />
    </section>
  );
}
