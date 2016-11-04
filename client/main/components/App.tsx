import { IDispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import {
  
  MainSection,
  model,
  addTodo,
  editTodo,
  clearCompleted,
  completeAll,
  completeTodo,
  deleteTodo
} from '../../todos';

import {
    TestHeader,
    TestHeader1,
    TestHeader2,
    TestHeader3
    
} from '../../banner';

interface AppProps {
  todos: model.Todo[];
  dispatch: IDispatch;
}

class App extends React.Component<AppProps, void> {
  render() {
    const { todos, dispatch } = this.props;

    return (
      // <div className="todoapp">
      //   <Header addTodo={(text: string) => dispatch(addTodo(text))} />
      //   <MainSection
      //       todos={todos}
      //       editTodo={(t,s) => dispatch(editTodo(t, s))}
      //       deleteTodo={(t: model.Todo) => dispatch(deleteTodo(t))}
      //       completeTodo={(t: model.Todo) => dispatch(completeTodo(t))}
      //       clearCompleted={() => dispatch(clearCompleted())}
      //       completeAll={() => dispatch(completeAll())}/>
      // </div>
      <div classname="todoapp">
      <TestHeader/>
      <TestHeader1/>
      <TestHeader2/>
      <TestHeader3/>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
