# Github Cart

<div>This application is motivated on shopping cart. Used ReactJS / Redux / Jest / Enzyme / SCSS. The main points for this application is that firstly, used axios to receive the github information via github API with ReduxThunk (Async). Secondly, by using Jest, test Component, Action Functions, PropsType and Integration for store.</div>

<h2>INSTALLATION</h2>
<ul>
    <li>git clone https://github.com/Cool-Hongsi/Github-Cart.git</li>
    <li>./githubcart -> npm install (To install necessary modules)</li>
    <li>./githubcart -> npm start (To execute the program)</li>
    <li>./githubcart -> npm test (To test application)</li>
</ul>
<h2>SET UP</h2>
<ul>
    <li>Development Program : Visual Studio Code</li>
    <li>Model : X</li>
    <li>View : ReactJS
      <ul>
        <li>axios</li>
        <li>check-prop-types</li>
        <li>enzyme</li>
        <li>enzyme-adapter-react-16</li>
        <li>moxios</li>
        <li>node-sass</li>
        <li>prop-types</li>
        <li>react</li>
        <li>react-dom</li>
        <li>react-redux</li>
        <li>react-router-dom</li>
        <li>react-scripts</li>
        <li>redux</li>
        <li>redux-thunk</li>
      </ul>
    </li>
    <li>Controller : X</li>
</ul>
<h2>PROCESS</h2>
    <ol>
        <li>In main page, once a user input github ID, the primary information for github ID will be printed out on front page and there is 'Link' button that can open the repository for github ID.</li>
        <li>In addition, there is a cart button. If clicks this button, then the information the user clicks will be stored in cart.</li>
        <li>In cart page, able to increment or decrease the number of quantity of github ID as well as possible to remove.</li>
        <li>The number of quantity and total quantity will be processed as long as the user controls the buttons.</li>
        <li>Testing React and Redux application by using Jest and Enzyme (Integration / checkPropTypes / checkActionFunction / checkComponent)</li>
        <li>It consists 5 test files and 12 test modules.</li>
        <li>Verify prop types / Verify Action function / Verify Component / Integration</li>
        <li>This application is using axios to receive the data from API and integration test in order to check store is working properly via moxios module.</li>
    </ol>