const { Regulation } = require("../models/Regulation");
const express = require('express');
const Sequelize = require('sequelize');



async function Fetch_Regulation(req, res) {
    try {
        // Fetch all regulations using Sequelize
        const regulations = await Regulation.findAll({
          attributes: ['regulation_id'] // Select only regulation_id for efficiency
        });
    
        // Check if any regulations were found
        if (regulations.length === 0) {
          return res.status(404).send({ message: "There is no regulation data available." });
        }
    
        // Extract regulation IDs from the fetched data
        const regulationIds = regulations.map((regulation) => regulation.regulation_id);
    
        // Send the extracted regulation IDs as JSON response
        res.json(regulationIds);
      } catch (error) {
        console.error("Error fetching regulations:", error);
        res.status(500).send({ message: "An error occurred while fetching regulations." });
      }
}




module.exports.Fetch_Regulation = Fetch_Regulation;