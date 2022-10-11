export const transformer = ({
  DatasetName,
  MonitoringLocationID: id,
  CharacteristicName: field,
  ResultValue: total,
}) => {
  return {
    DatasetName,
    id,
    field,
    total,
  };
};
