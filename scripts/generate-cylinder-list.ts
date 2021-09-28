import * as fs from 'fs';
import * as yargs from 'yargs';
import { TankProperties } from '../src/types'
import { from } from 'rxjs';

let argv = yargs
    .usage('$0 <path> <out>')
    .positional('path', {
        type: 'string',
        describe: 'Path to the exported tanks CSV'
    })
    .positional('out', {
        type: 'string',
        describe: 'Output path for JSON file'
    })
    .argv

const tankPropertiesKeysMap = {
    "Private label": "private_label",
    "OEM": "oem",
    "Colloquial name": "colloquial_name",
    "Material": "material",
    "Finish": "finish",
    "True Capacity (L)": "capacity",
    "Water Volume (L)": "volume",
    "Fill pressure (bar)": "rated_pressure",
    "Manufacture year range": "manufacture_years",
    "Height (no valve) (cm)": "height",
    "Diameter": "diameter",
    "Weight (empty)": "weight_empty",
    "Weight (full)": "weight_full",
    "Buoyancy (empty)": "buoyancy_empty",
    "Buoyancy (full)": "buoyancy_full",
    "REE (cc)": "ree",
    "Valve Type": "valve_type",
    "Source": "_source"

  }

function main(csvSource: string, outPath: string) {
    const csvString = fs.readFileSync(csvSource, 'utf-8');
    const rows = csvString.split('\n');

    const tankList: TankProperties[] = []

    let keys = rows[0].split(',');
    for (let i = 0; i < keys.length; i ++) {
        // remove line carriages
        console.log(JSON.stringify(keys[i]))
        keys[i] = keys[i].replace(/\r$/,'');
        console.log(JSON.stringify(keys[i]))
    }
    console.log({keys})

    for (let i = 1; i < rows.length; i ++) {
        const cells = rows[i].split(',');
        const tank: TankProperties = {}
        for (let j = 0; j < keys.length; j ++) {
            const keyLabel = keys[j];
            const key = tankPropertiesKeysMap[keyLabel as keyof typeof tankPropertiesKeysMap] as keyof TankProperties;
            
            cells[j] = cells[j].replace(/\r$/,'');
            tank[key] = cells[j]
        }
        tankList.push(tank);
    }
    
    fs.writeFileSync(outPath, JSON.stringify(tankList));
}


main(argv['_'][0],argv['_'][1]);