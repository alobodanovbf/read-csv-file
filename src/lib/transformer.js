export const transformer = ({
  DatasetName,
  MonitoringLocationID: id,
  CharacteristicName: field,
  ResultValue,
}) => {
  return {
    DatasetName,
    id,
    field,
    total: ResultValue,
  };
};
