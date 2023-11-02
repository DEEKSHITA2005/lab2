import React from 'react';
import ParentComponent from './components/ParentComponent';
import CounterComponent from './components/CounterComponent';
import UserCard from './components/UserCard';
const App = () => {
return (
<div>
<h1>Exercise 1: Props Example</h1>
<ParentComponent />
<hr />
<h1>Exercise 2: State Management Example</h1>
<CounterComponent />
<hr />
<h1> Exercise 1[example]: </h1>
<UserCard />
</div>
);
};
export default App;