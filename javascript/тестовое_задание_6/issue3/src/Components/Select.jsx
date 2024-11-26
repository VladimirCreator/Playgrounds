import { useState } from 'react';

export default function Select({ placeholder, container, select, onSelect }) {
    const [stdin, setStdin] = useState('');
    const [selectedIndices, setSelectedIndices] = useState([]);

    const list = Array.from(container, select);

    return (
        <>
            <input
                onChange={(event) => handleChange(event.target.value)}
                placeholder={placeholder}
            />
            <ul>
                {
                    list.map(
                        (element, index) => {
                            if (stdin.length !== 0 && element.toString().toLowerCase().includes(stdin) || stdin.length === 0) {
                                return (
                                    <li onClick={() => handleClick(index)}>
                                        {element.toString()}
                                    </li>
                                );
                            }
                            else {
                                return null;
                            }
                        }
                    )
                }
            </ul>
        </>
    );

    function handleChange(text) {
        setStdin(text.toLowerCase());
    }

    function handleClick(index) {
        if (selectedIndices.includes(index)) {
            setSelectedIndices(
                selectedIndices.filter(selectedIndex => selectedIndex !== index)
            );
        }
        else {
            setSelectedIndices(
                selectedIndices.concat(index)
            );
            onSelect(container.at(index), index);
        }
    };
}
