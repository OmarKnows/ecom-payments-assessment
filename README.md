## E-Com Payments Assessment

This project is a submission to E-Com Payments frontend assesment.


## Notes:

- Built with React 18.3.1, Typescript 5.2.2, vite 5.3.4.
- Tailwind CSS was used for styling.
- All 5 tasks were attempted, each task has its own page in addition to the home page.


## Task 5:
In this task it was asked to optimize a component. This was achieved using memo, UseMemo, UseCallBack.
The purpose of these tools is to save components, constants and functions in the memory such that they can be retrieved quickly when a re-render is required without having to re-calculate anything.
I have demonstrated the difference by making two components, one optimized and one unoptimized paired with a re-render button.
Initially, the render times for both will be high, however if the re-render button is pressed, the time taken to render the optimized component is significantly less.
This is demonstrated in the console and this screenshot where the render times are provided, these numbers are provided by react profiler.

![Screenshot Description](https://github.com/OmarKnows/ecom-payments-assessment/blob/main/screenshot.png?raw=true)

As you can see, the initial actualTime when the component mounts is around 2000ms for both the optimized and unoptimized component, however when the components update, the optimized reduces to almost 0ms while the unoptimized component remains above 2000ms, Thus succesfully reaching improved performance in the optimized component.

## How To Run

1. Clone the repository:
   ```git clone https://github.com/OmarKnows/ecom-payments-assessment.git```
2. Navigate to the project directory:
  ```cd ecom-payments-assessment```
3. Install Dependencies:
   ```npm install```
4. Start the development server:
   ```npm run dev```
