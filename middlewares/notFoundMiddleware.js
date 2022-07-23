const notFound = (_, res) => res.status(404).send("Doesn't exist");

module.exports = notFound;
