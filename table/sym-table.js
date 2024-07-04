(function (PV) {
    'use strict';

    function symbolVis() { }
    PV.deriveVisualizationFromBase(symbolVis);

    var definition = {
        typeName: 'Table',
        visObjectType: symbolVis,
        datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Single,
        supportsCollections: true,
        iconUrl: 'scripts/app/editor/symbols/ext/icons/sym-table.png',
        getDefaultConfig: function () {
            return {
                DataShape: 'Table',
                Height: 200,
                Width: 400,
                ShowHeaders: true,
                ShowAddRowButton: true,
                Headers: ['Column 1', 'Column 2', 'Column 3']
            };
        },
        configOptions: function () {
            return [{
                title: 'Format Table',
                mode: 'formatTable'
            }];
        }
    };

    symbolVis.prototype.init = function (scope, elem) {
        scope.dataRows = [
            [{ value: '' }, { value: '' }, { value: '' }]
        ];

        scope.addRow = function () {
            var newRow = scope.config.Headers.map(function () {
                return { value: '' };
            });
            scope.dataRows.push(newRow);
        };

        this.onDataUpdate = onDataUpdate;
        this.onConfigChange = onConfigChange;

        function onDataUpdate(newData) {
            if (!newData) {
                return;
            }

            // Handle data update logic if necessary
        }

        function onConfigChange(newConfig) {
            // Handle configuration change if necessary
        }
    };

    PV.symbolCatalog.register(definition);
})(window.PIVisualization);