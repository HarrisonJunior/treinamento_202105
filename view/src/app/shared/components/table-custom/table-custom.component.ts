import { Component, OnInit, Input, ContentChild, TemplateRef, AfterContentInit, AfterViewInit, AfterContentChecked } from '@angular/core';
import { TableHeaderDirective } from './config/table-header.directive';
import { TableBodyDirective } from './config/table-body.directive';
import { TableEmptyDirective } from './config/table-empty.directive';

@Component({
  selector: 'app-table-custom',
  templateUrl: './table-custom.component.html',
  styleUrls: ['./table-custom.component.scss']
})
export class TableCustomComponent {

  @Input() items: any[] = [];
  @Input() itemsPerPage = 0;
  @Input() paginator = true;
  @Input() classPaginator = 'bcg-navy';

  @ContentChild(TableHeaderDirective, { static: true, read: TemplateRef }) appTableHeader;
  @ContentChild(TableBodyDirective, { static: true, read: TemplateRef }) appTableBody;
  @ContentChild(TableEmptyDirective, { static: true, read: TemplateRef }) appTableEmpty;

  pageCurrent = 1;

  constructor() {
  }

  setCurrentPage(page) {
    this.pageCurrent = page;
  }

}
