import * as ko from 'knockout';
import package from 'package'

class ViewModel{
  words = ko.observableArray(['Hello', 'World']);
}
ko.applyBindings(new ViewModel());
