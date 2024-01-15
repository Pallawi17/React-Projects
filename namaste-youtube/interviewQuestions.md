# Interview Questions

## What is React hooks? Explain the difference between useState and useEffect.

* React hooks are functions that allow you to use state and lifecycle features in functional components.
* useState is used to manage state.
* useEffect is used to handle side effects like fetching data or subscribing to events

```javaScript
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `Count: ${count}`;
  }[count])
```

## What is the Context API in React? How can it be used to manage global state?

* Context API provides a way to share data between components without passing it through props.
* it's usefull for managing global state.
* You create a context using `createContext` and provide it at a higher level.
* Consumers can access the context usin `useContext`.

```javaScript 
  const ThemeContext = createContext();

  function App(){
    return <ThemeContext.Provider value='dark'>
    <Component />
    </ThemeContext.Provider>
  }

  function component() {
    const theme = useContext(ThemeContext);
    // use theme value here
  }
```

## What are React render props? How do they enable component composition and code reusability?

* Render props is a pattern where a component accepts a function as a props and calls it to render content.
* It enables component composition and code reusability by allowing components to share their internal state or behaviour with other components.

```javaScript
  function MouseTracker({render}){
    const [position, setPosition] = useState({x:0,y:0});

    useEffect(()=>{
      const handleMouseMove = (event) => {
        setPosition({x: event.clientX, y: event.clientY});
      };

      window.addEventListener('mousemove', handleMouseMove);

      return() => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    },[])

    return render(position);
  }
```

## How can you optimize performance in a React application? Discuss techniques like memoization, code splitting, and lazy loading?

* Performance optimization techniques include memoization with `useMemo` and `useCallback` to avoid unnecessary recalculations, code splitting to split the bundle into smaller chunks, lazy loading to load components or resources only when needed.

```javaScript
  const memoizedValue = useMemo(()=>
    computeExpensiveValue(a,b), [a,b]);

  const handleClick = useCallback(()=>{
    // Handle click event
  }, []);
```