class Component1 extends React.Component {
    render() {

        for (let i = 0; i < 10; i++) {
            console.log("stuff");
        }

        return (
            <div>asdf what do you know await this amazing really amazing stuff and even more asdf qwer qwre qwerew</div>
        );
    }
}

ReactDOM.render(<Component1 />, document.getElementById('root'));