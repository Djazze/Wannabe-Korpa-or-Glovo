import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'No salmonella, pinky promise',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'You know you want it',
    price: 16.99,
  },
  {
    id: 'm3',
    name: '3D Printed Burger',
    description: 'American, raw, full of freedom',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Salad with a side of pork and ranch',
    description: 'Healthy to the untrained eye',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
