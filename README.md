# Evolve Version Github Action

Determines the version of a database migration project based on which migration
scripts are present.

## Inputs

- `scriptDirectory`: The directory containing database migration scripts.

## Outputs

- `version`: The database version, as determined by the scripts in `scriptDirectory`.

## Example usage

```
- name: Get version
        id: get_version
        uses: arit-ucsb/AppDev.EvolveVersion.Action@v1.0.0
        with:
          scriptDirectory: "./Sql_Scripts"
```
