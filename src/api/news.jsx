import { useState, useEffect } from 'react';
import Card from '../components/cards';
import { WaveVariant3 } from '../components/wave';

const API_KEY = '783213b923514062807c54a89fe3b756';
const BASE_API_URL = 'https://newsapi.org/v2/everything';

function News() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const getNews = async () => {
        const query = encodeURIComponent('математика');
        const URL_WITH_KEY = `${BASE_API_URL}?q=${query}&language=ru&pageSize=6&searchIn=title&apiKey=${API_KEY}`;

        try {
            const response = await fetch(URL_WITH_KEY);

            if (!response.ok) throw new Error(`Ошибка сети: ${response.status}`);
            const data = await response.json();

            if (data.status !== 'ok') throw new Error(`Ошибка API: ${data.message}`);
            setArticles(data.articles || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        getNews();
    }, []);

    if (loading) return <p className='loading-text'>Загрузка</p>;
    if (error) return <p className='error-text'>Ошибка: {error}</p>;

    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <WaveVariant3 />

            <main id='mainContainerInMain'>
                <section>
                    <h3 style={{
                        color: 'var(--md-sys-color-primary)',
                        marginBottom: '1rem',
                        fontSize: '2rem',
                        textAlign: 'center',
                        paddingTop: '50px'
                    }}>
                        Новости
                    </h3>
                    <div id="newsCards">
                        {articles.map((article, index) => (
                            <Card
                                key={index}
                                title={article.title}
                                link={article.url}
                                description={article.description || article.content}
                                newsImage={article.urlToImage}
                                isNews={true}
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default News;