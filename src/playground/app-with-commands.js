class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePickOption = this.handlePickOption.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteOption = this.handleDeleteOption.bind(this);
      this.state = {
        options: props.options
      };
    }
  
    handleDeleteOptions() {
      // this.setState(() => {
      //   return {
      //     options: []
      //   };
      // }); They are the same below for an arrow function => {} is an function for returning an object in arrow function we need to wrap them with ({}) returning object implicitly
      this.setState(() => ({ options: [] }));
    }
    
    handleDeleteOption(option) {
      console.log("hdo",option);
    }
  
    handlePickOption() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert(option);
    }
  
    handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      }
  
      // this.setState(prevState => {
      //   return {
      //     options: prevState.options.concat([option])
      //   };
      // });
      this.setState((prevState) => ({options: prevState.options.concat([option])}));
    }
  
    render() {
      //const title = "Indecision";
      const subtitle = "Put your life in hands of computer";
      return (
        <div>
          <Header subtitle={subtitle} />
          <Action
            hasOptions={this.state.options.length > 0}
            handlePickOption={this.handlePickOption}
          />
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
          />
          <AddOption handleAddOption={this.handleAddOption} />
        </div>
      );
    }
  }
  
  IndecisionApp.defaultProps = {
    options: []
  };
  const Header = props => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
  };
  
  Header.defaultProps = {
    title: "Indecision"
  };
  
  // class Header extends React.Component {
  //   render() {
  //     return (
  //       <div>
  //         <h1>{this.props.title}</h1>
  //         <h2>{this.props.subtitle}</h2>
  //       </div>
  //     );
  //   }
  // }
  const Action = props => {
    return (
      <div>
        <button onClick={props.handlePickOption} disabled={!props.hasOptions}>
          What should I do?
        </button>
      </div>
    );
  };
  
  // class Action extends React.Component {
  
  //   render() {
  //     return (
  //       <div>
  //         <button
  //         onClick={this.props.handlePickOption}
  //         disabled ={!this.props.hasOptions}> What should I do?
  //         </button>
  //       </div>
  //     );
  //   }
  // }
  const Options = props => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {props.options.map((option) => (
           <Option key={option} optionText={option}  handleDeleteOption={props.handleDeleteOption}/>
    ))}
      </div>
    );
  };
  
  // class Options extends React.Component {
  
  //   render() {
  //     return (
  //       <div>
  //         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
  //         {this.props.options.map(option => {
  //           return <Option key={option} optionText={option} />;
  //         })}
  //       </div>
  //     );
  //   }
  // }
  const Option = (props) => {
    return <div>{props.optionText}
    <button 
    onClick = {(e) => {
      props.handleDeleteOption(props.optionText)
    }}
    > 
    Remove
    </button>
    </div>;
  };
  // class Option extends React.Component {
  //   render() {
  //     return <div>{this.props.optionText}</div>;
  //   }
  // }
  
  class AddOption extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.state = {
        error: undefined
      };
    }
    handleAddOption(e) {
      e.preventDefault();
      const option = e.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
  
      // this.setState(() => {
      //   return {
      //     error: error
      //   };
      // });
      this.setState(() => ({error: error}));
    }
    render() {
      return (
        <div>
          {this.state.error && <p> {this.state.error}</p>}
          <form onSubmit={this.handleAddOption}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
      );
    }
  }
  
  //Stateless Functional Component
  // const User  = (props) => {
  // return (
  //   <div>
  //   <p>Name: {props.name}</p>
  //   <p>Age: {props.age}</p>
  //   </div>
  // )
  // };
  
  ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
  