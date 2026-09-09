# Clearance Hole Sketch 2.1

Custom widget for ArcGIS Experience Builder Developer Edition 1.17. SUE crews can build an editable mast-arm clearance-hole sketch, exchange it as a portable JSON save state, and attach both the editable JSON and a rendered PNG to one selected feature.

## What changed in 2.0

- Fabric.js 5.3.0 now owns drawing objects, selection, transforms, freehand paths, image objects, serialization, and restoration.
- **Download state** exports a versioned JSON file. **Load state** restores a JSON file received from another user.
- **Save to feature** attaches both the PNG and editable JSON to the selected ArcGIS feature.
- **Load from feature** restores the newest matching editable JSON attachment from the selected feature.
- The canvas is now 1600 x 1200. The mast-arm outline is smaller and centered, leaving substantially more grid space for surrounding site context.
- The 1.17 settings imports use the dedicated `jimu-ui/advanced/data-source-selector` path and `TextInput`.

## Fixes in 2.1

- The Fabric upper interaction canvas is transparent, so it no longer hides the lower canvas containing the template and committed objects.
- Every mast-arm outline vertex, dimension endpoint, and dimension-box edge is calculated with the configured grid spacing and snapped to a grid line.
- Save-state validation includes all standard Fabric 5 drawable object types. In particular, `text` is now accepted because every legend symbol group contains a Fabric Text label.
- Unsupported-object errors now include the serialized type name to simplify future diagnosis.

## User flow

1. Select exactly one feature in the configured Map widget.
2. Drag a legend item onto the grid, or tap an item and then tap the grid on iPad/iPhone.
3. Draw with Pen, Line, Arrow, Box, or Ellipse; add text or an image as needed.
4. Select Fabric objects to move, resize, rotate, or delete them. Undo and redo preserve object-level edits.
5. Use one of the save workflows:
   - **Download state** creates an editable JSON file for handoff to another user.
   - **Load state** opens a local editable JSON file.
   - **Save to feature** attaches a PNG and editable JSON to the selected feature.
   - **Load from feature** opens the newest editable JSON created by this widget for the selected feature.
   - **PNG** downloads a flattened image only.

## Save-state format

The JSON file is a versioned envelope:

```json
{
  "schemaVersion": 1,
  "application": "clearance-hole-sketch",
  "createdAt": "2026-09-04T12:00:00.000Z",
  "canvas": { "width": 1600, "height": 1200 },
  "template": { "showGrid": true, "gridSize": 25 },
  "fabric": { "version": "5.3.0", "objects": [] }
}
```

Only crew-created Fabric objects are serialized. The locked grid and mast-arm template are regenerated from the `template` settings when a state loads. Imported images are embedded as `data:image/...` values, so they travel with the JSON instead of referencing a local file.

The loader validates the application name, schema version, standard Fabric 5 object types, embedded-image source, object count, and a 30 MB local-file limit before restoring content. Supported types include Object, ActiveSelection, Circle, Ellipse, Group, Image, IText, Line, Path, Polygon, Polyline, Rect, Text, Textbox, and Triangle. JSON from unknown sources should still be treated as project data and reviewed before use.

## ArcGIS attachments

The configured data source must be the Feature Layer shown by the Map widget. The layer must have attachments enabled, and the signed-in user must be allowed to add and query attachments.

For a selected object ID of `42`, Save to feature creates a matched pair similar to:

```text
clearance-hole-sketch-42-2026-09-04T12-00-00-000Z.png
clearance-hole-sketch-42-2026-09-04T12-00-00-000Z-editable.json
```

The JSON is attached first. If the PNG request subsequently fails, the widget reports that the editable state was saved but the PNG failed. Load from feature filters attachment names using the configured filename prefix and selected object ID, then loads the candidate with the greatest attachment ID.

## Package tree

```text
clearance-hole-sketch/
|-- README.md
|-- config.json
|-- icon.svg
|-- manifest.json
|-- package.json
`-- src/
    |-- config.ts
    |-- runtime/
    |   |-- fabric-editor.ts
    |   |-- style.scss
    |   |-- symbols.ts
    |   |-- translations/default.ts
    |   `-- widget.tsx
    `-- setting/
        |-- setting.tsx
        `-- translations/default.ts
```

## Dependency

This revision intentionally adds one runtime dependency and its TypeScript definitions:

```json
"fabric": "5.3.0"
"@types/fabric": "5.3.7"
```

Fabric is used because its object graph and JSON serialization solve the required editable-save-state workflow. No other third-party dependency was added.

Experience Builder supports a `package.json` inside a widget folder. When the widget is under `client/your-extensions/widgets`, running `npm install` in `client` installs widget dependencies automatically. See [Esri's third-party library guidance](https://developers.arcgis.com/experience-builder/guide/third-party-libraries/).

## Installation

1. Copy the complete folder to:

   ```text
   <Experience Builder 1.17>/client/your-extensions/widgets/clearance-hole-sketch
   ```

2. Stop the Experience Builder client if it is running.
3. From `<Experience Builder 1.17>/client`, run:

   ```bash
   npm install
   npm start
   ```

4. Open an experience and add **Clearance Hole Sketch** from **Insert widget > Custom**.

If your installation does not automatically discover nested widget dependencies, run `npm install` once inside the `clearance-hole-sketch` widget folder, then restart `npm start` from `client`.

## Configuration

1. Add a Map widget with the target editable Feature Layer.
2. Add Clearance Hole Sketch and open its settings.
3. Select the Map widget.
4. Select the same Feature Layer as the widget data source.
5. Set the attachment filename prefix, grid visibility/spacing, default stroke color, and default stroke width.
6. Verify attachment support and add/query attachment privileges for the intended users.

The Map widget choice documents the intended app connection. Runtime selection is synchronized through Experience Builder's shared Feature Layer data source.

## Important files

- `src/runtime/widget.tsx`: React UI, Fabric lifecycle/events, tools, history, local state exchange, ArcGIS selection, and attachment operations.
- `src/runtime/fabric-editor.ts`: save-state schema/validation, locked template generation, legend-object factories, and arrow creation.
- `src/runtime/symbols.ts`: searchable 75-item legend catalog.
- `src/setting/setting.tsx`: 1.17-compatible Map widget and Feature Layer selectors plus defaults.
- `src/config.ts`: shared settings types.

## States and safeguards

- Save/load from feature is disabled unless exactly one map feature is selected.
- Loading overlays the canvas until Fabric finishes enlivening all objects and embedded images.
- Missing configuration, attachment support, save state, permissions, or network access produces a visible error.
- The grid and mast arm are locked, noninteractive, and excluded from Fabric JSON.
- Save-state loads reset undo/redo history to prevent crossing between different documents.
- The drawing canvas uses Fabric's touch handling and enlarged control corners for iPad use.
- Imported state rejects external image URLs; portable images must be embedded data URLs.

## Validation status

The delivery environment performed static package, JSON, import, configuration, archive, symbol-catalog, and source consistency checks. It could not access npmjs.org, so Fabric could not be installed here and a real Experience Builder 1.17 TypeScript compile was not available. A successful 1.17 compile or authenticated attachment transaction is therefore not claimed.

Run the following validation in the target installation:

1. Run `npm install` and `npm start` from the Experience Builder 1.17 `client` directory; resolve any compiler errors before continuing.
2. Confirm the settings pane opens without React error 130 and both selectors render.
3. Place, select, resize, rotate, delete, undo, and redo each object family.
4. Draw with mouse, finger, and Apple Pencil; test portrait and landscape iPad layouts.
5. Import a photo, download JSON, reload the page, and load the JSON. Confirm the photo and transforms return.
6. Send the JSON to another device/user and confirm it loads identically.
7. Download PNG and verify the expanded context grid and mast-arm placement.
8. Save to an attachment-enabled feature and confirm both `.png` and `-editable.json` appear.
9. Clear the canvas, select the same feature, use Load from feature, and confirm the newest drawing returns.
10. Test a feature with no JSON state, a layer without attachments, and a user without attachment privileges.

## Known limitations

- The widget uses the attachment ID as the proxy for newest matching state. If attachments are migrated or IDs are reassigned, review the candidate names manually.
- Existing version 1.x PNG attachments cannot be converted back into editable Fabric objects.
- Save-state JSON with embedded photos can be large and remains subject to portal/feature-service attachment-size limits.
- Concurrent users can create separate state attachments; Load from feature intentionally chooses the newest matching attachment rather than merging drawings.
- Text entry uses the browser prompt for broad iOS and Experience Builder 1.17 compatibility.

## References

- [Use third-party libraries in Experience Builder](https://developers.arcgis.com/experience-builder/guide/third-party-libraries/)
- [Use data source in a widget](https://developers.arcgis.com/experience-builder/guide/use-data-source-in-widget/)
- [Use a Map widget in a custom widget](https://developers.arcgis.com/experience-builder/guide/use-map-widget-in-widget/)
- [FeatureLayer.addAttachment](https://developers.arcgis.com/javascript/latest/references/core/layers/FeatureLayer/#addAttachment)
- [Fabric.js 5 upgrade and JSON loading](https://fabricjs.com/docs/old-docs/v5-breaking-changes/)
