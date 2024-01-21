const heading=React.createElement(
    "div",
    {id:'parent'},
    [
        React.createElement(
            "div",
            {id:'child'},
            [React.createElement(
                "h1",
                {},
                "hey there iam a h1 tag")
            ,React.createElement(
                "h2",
                {},
                "hey iam h2")
            ]),
        React.createElement(
            "div",
            {id:'child'},
            [React.createElement(
                "h1",
                {},
                "hey there iam a h1 tag")
            ,React.createElement(
                "h2",
                {},
                "hey iam h2")
            ])
    ]
    )





const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)