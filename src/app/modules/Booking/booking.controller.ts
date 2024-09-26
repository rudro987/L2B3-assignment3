import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { BookingServices } from './booking.service';

const createBookingsForSlots = catchAsync(async (req, res) => {
  const userFromToken = {
    email: req.user.userEmail,
  };

  const result = await BookingServices.createBookingsForSlotsIntoDB(
    req.body,
    userFromToken,
  );

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'Booking created successfully',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingsFromDB();

  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'All bookings retrieved successfully',
    data: result,
  });
});

export const BookingControllers = {
  createBookingsForSlots,
  getAllBookings
};
