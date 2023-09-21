import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = ( {id, onChange, text} ) => {
    const [markdownText, setMarkdownText] = useState(text);
    const [showHint, setShowHint] = useState(false); // Добавляем состояние для отображения/скрытия подсказки

    useEffect(() => {
        console.log(text)
    }, [text]);
    const handleChange = (e) => {
        setMarkdownText(e.target.value)
        onChange(e.target.value);
    };

    const toggleHint = () => {
        setShowHint(!showHint);
    };

    return (
        <div>
            <textarea
                className="border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-customPurple"
                value={markdownText}
                id={id }
                onChange={handleChange}
                rows={10}
                cols={50}
                placeholder="Enter review text"
                required={true}
                onFocus={toggleHint}
                onBlur={toggleHint}
            />
            {showHint && (
                <div className="text-customPurple">
                    <p>Подсказка: Используйте #(###) для заголовков; ** для жирного текста; * курсива; [] для ссылок; двойной пробел для переноса строки </p>
                </div>
            )}
            <ReactMarkdown>
                {markdownText}
            </ReactMarkdown>
        </div>
    );
}

export default MarkdownEditor;