import UserSchema from "../model/UserModelScheme.js";
import asyncHandler from "express-async-handler";

export const postUser= asyncHandler(async(req, res) => {
    try {
        const user = await UserSchema.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
  })
export const getUser= asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const user = await UserSchema.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
  })
export const getUsers=asyncHandler(async(req, res) => {
    try {
        const users = await UserSchema.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
  })
export const putUser= asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const user = await UserSchema.findByIdAndUpdate(id, req.body);
        if (!user) {
            res.status(404);
            throw new Error(` User not found ${id}`);
        } else {
          const updatedUser = await UserSchema.findById(id);
          res.status(200).json(updatedUser);
        }
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
  })
export const deleteUser=asyncHandler(async(req, res) => {
    try {
        const {id} = req.params;
        const user = await UserSchema.findByIdAndDelete(id);
        if (!user) {
            res.status(404);
            throw new Error(` User not found ${id}`);
        } else {
          res.status(200).json(user);
        }
    } catch (error) {
        res.status(500);
        throw new Error(error.message);
    }
  })