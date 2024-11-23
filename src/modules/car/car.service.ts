import { CarModel } from './car.model';
import { TCar } from './car.interface';

//creating a car into the DB
const createACarIntoDB = async (car: TCar) => {
  try {
    const result = await CarModel.create(car);
    return result;
  } catch (err) {
    // console.log(err);
    throw new Error('An error occur creating a car' + err);
  }
};

//retrieving all the car's collection from the DB
const getAllCarsFromDB = async (car: TCar) => {
  try {
    const result = await CarModel.find(car);
    return result;
  } catch (err) {
    // console.log(err);
    throw new Error('An error occur creating a car' + err);
  }
};

//retrieving a specific car from the DB by an ID
const getACarByIdFromDB = async (carId: string) => {
  try {
    const result = await CarModel.findById(carId);
    return result;
  } catch (err) {
    console.log(err);
    throw new Error('An error occur retrieving the car!' + err);
  }
};

// updating  a specific car from the DB by an ID
const updateACarIntoDB = async (carId: string, updateData: Partial<TCar>) => {
  try {
    const result = await CarModel.findByIdAndUpdate(carId, updateData, {
      new: true,
    });
    //added {new: true} because it ensures that the mongoose returns the new data, not the last updated data. without {new: true} it need two try to get the new updated result
    return result;
  } catch (err) {
    console.log(err);
    throw new Error('An error occur updating the car!' + err);
  }
};

//exporting these functions wrapping as an object
export const CarService = {
  createACarIntoDB,
  getAllCarsFromDB,
  getACarByIdFromDB,
  updateACarIntoDB,
};
