import './App.css';

import Select from './Components/Select';

export default function App() {
    return (
        <>
            <Select
                placeholder='Name'
                container={
                    [
                        {"name":"Francesca Preston","age":8,"type":"cat","gender":"female","breed":true,"features":["white","kind"]},
                        {"name":"Reva Sparks","age":6,"type":"cat","gender":"female","breed":true,"features":["multicolor","neutral"]},
                        {"name":"Barton Decker","age":1,"type":"dog","gender":"male","breed":true,"features":["black","evil"]},
                        {"name":"Byers Wiggins","age":12,"type":"cat","gender":"male","breed":true,"features":["multicolor","evil"]},
                        {"name":"Duke Chavez","age":5,"type":"dog","gender":"male","breed":false,"features":["multicolor","kind"]},
                        {"name":"Silvia Sears","age":13,"type":"cat","gender":"female","breed":false,"features":["multicolor","neutral"]},
                        {"name":"Noreen Lamb","age":11,"type":"dog","gender":"female","breed":false,"features":["black","neutral"]},
                        {"name":"Williams Fry","age":11,"type":"cat","gender":"male","breed":true,"features":["black","neutral"]},
                        {"name":"Hobbs West","age":2,"type":"cat","gender":"male","breed":true,"features":["multicolor","evil"]},
                        {"name":"Farrell Walton","age":4,"type":"dog","gender":"male","breed":true,"features":["white","neutral"]},
                        {"name":"Gilda Allen","age":12,"type":"dog","gender":"female","breed":true,"features":["multicolor","evil"]},
                        {"name":"Mariana Jacobs","age":5,"type":"dog","gender":"female","breed":true,"features":["black","neutral"]},
                        {"name":"Hamilton Buchanan","age":13,"type":"dog","gender":"male","breed":true,"features":["white","kind"]},
                        {"name":"Stein Flynn","age":2,"type":"cat","gender":"male","breed":true,"features":["white","neutral"]},
                        {"name":"Elisa Lawrence","age":15,"type":"cat","gender":"female","breed":false,"features":["black","kind"]},
                        {"name":"Dianna Larsen","age":14,"type":"cat","gender":"female","breed":false,"features":["black","neutral"]}
                    ]
                }
                select={
                    (object) => {
                        return object.name;
                    }
                }
                onSelect={
                    (object, index) => {
                        console.log(`Selected[${index}] => ${JSON.stringify(object)}`);
                    }
                }
            />
        </>
    );
}
