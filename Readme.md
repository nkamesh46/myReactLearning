#

Key Notes

Npm is a package manager which manages all dependecies required for project.For Example Bundling is a package which can be installed using npm

Command :Npm init

A package.json file is created after you run the above command and it is a configuration for npm .Keeps track of all dependencies

Bundling:
Bundling is a concept which bundles/minfies/compress all our project files so that it would be production ready

Best bundlers :Web Pack,Parcel(Used in our application)
Command:npm install parcel

# Advantages of Parcel

1 It creates Dev build
2 Creating a local server
3 HMR(Hot Module Replacement) which uses file watching algorithm
4 caching for faster builds
5 image optimisation
6 minifying
7 bundling
8 compressing
9 Image Optimisation
10 Tree Shaking
11 Code Splitting

Functional Component: FC is a javascript function whicn returns jsx code or react element

React.Fragment behaves like an empty tag if you render two divs in a functional component

what is config driven ui

# export

Two types named and default
import {} from 'path' ->named
import from 'path'->default

# why react

Efficiet way of dom manipulation
created virtual dom(its just a javascript represntation og html)
compares two virtual doms using reconcilation algorithm or react fiber get the difference and updats tha actual dom

# hooks

hooks are utility functions that react provides
1.use state is a hook that creates a super powerful state variable
Whenever the state variable changes react will rerender the component
2.Use Effect is a hook that creates side effects like api calls ,timers to the component based on the dependancy array that you give.It has a call back back function that executes whenever component is rendered and whenever dependencies update

# Read about Shimer effect in UI
