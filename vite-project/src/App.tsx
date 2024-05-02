import React, { useState, useEffect } from 'react';
import { requestUsers, requestArticles } from '../utils/graphql';

const App = () => {
    const [users, setUsers] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            const fetchedUsers = await requestUsers();
            const fetchedArticles = await requestArticles();
            setUsers(fetchedUsers);
            setArticles(fetchedArticles);
        })();
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <strong>{user.name}</strong> ({user.email})
                        <ul>
                            {user.articles.map(article => (
                                <li key={article.slug}>{article.title}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

            <h1>Articles</h1>
            <ul>
                {articles.map(article => (
                    <li key={article.slug}>
                        {article.title} by {article.author.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
