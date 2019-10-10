'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">oms-backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-b1e9f4761633c735f89ad0ca72aa8387"' : 'data-target="#xs-controllers-links-module-AppModule-b1e9f4761633c735f89ad0ca72aa8387"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-b1e9f4761633c735f89ad0ca72aa8387"' :
                                            'id="xs-controllers-links-module-AppModule-b1e9f4761633c735f89ad0ca72aa8387"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-b1e9f4761633c735f89ad0ca72aa8387"' : 'data-target="#xs-injectables-links-module-AppModule-b1e9f4761633c735f89ad0ca72aa8387"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b1e9f4761633c735f89ad0ca72aa8387"' :
                                        'id="xs-injectables-links-module-AppModule-b1e9f4761633c735f89ad0ca72aa8387"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthenticationModule.html" data-type="entity-link">AuthenticationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthenticationModule-a6d6d19cdc8339426cd0e824414056e8"' : 'data-target="#xs-controllers-links-module-AuthenticationModule-a6d6d19cdc8339426cd0e824414056e8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthenticationModule-a6d6d19cdc8339426cd0e824414056e8"' :
                                            'id="xs-controllers-links-module-AuthenticationModule-a6d6d19cdc8339426cd0e824414056e8"' }>
                                            <li class="link">
                                                <a href="controllers/AuthenticationController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthenticationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthenticationModule-a6d6d19cdc8339426cd0e824414056e8"' : 'data-target="#xs-injectables-links-module-AuthenticationModule-a6d6d19cdc8339426cd0e824414056e8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthenticationModule-a6d6d19cdc8339426cd0e824414056e8"' :
                                        'id="xs-injectables-links-module-AuthenticationModule-a6d6d19cdc8339426cd0e824414056e8"' }>
                                        <li class="link">
                                            <a href="injectables/AuthenticationService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthenticationService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormsModule.html" data-type="entity-link">FormsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-FormsModule-d6b98f65b2f68acd2732f467fbc35de3"' : 'data-target="#xs-controllers-links-module-FormsModule-d6b98f65b2f68acd2732f467fbc35de3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FormsModule-d6b98f65b2f68acd2732f467fbc35de3"' :
                                            'id="xs-controllers-links-module-FormsModule-d6b98f65b2f68acd2732f467fbc35de3"' }>
                                            <li class="link">
                                                <a href="controllers/FormsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FormsModule-d6b98f65b2f68acd2732f467fbc35de3"' : 'data-target="#xs-injectables-links-module-FormsModule-d6b98f65b2f68acd2732f467fbc35de3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FormsModule-d6b98f65b2f68acd2732f467fbc35de3"' :
                                        'id="xs-injectables-links-module-FormsModule-d6b98f65b2f68acd2732f467fbc35de3"' }>
                                        <li class="link">
                                            <a href="injectables/FormsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>FormsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatientModule.html" data-type="entity-link">PatientModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PatientModule-d3c74204d102f1e1bfdbbabeac85b183"' : 'data-target="#xs-controllers-links-module-PatientModule-d3c74204d102f1e1bfdbbabeac85b183"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PatientModule-d3c74204d102f1e1bfdbbabeac85b183"' :
                                            'id="xs-controllers-links-module-PatientModule-d3c74204d102f1e1bfdbbabeac85b183"' }>
                                            <li class="link">
                                                <a href="controllers/PatientController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatientController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PatientModule-d3c74204d102f1e1bfdbbabeac85b183"' : 'data-target="#xs-injectables-links-module-PatientModule-d3c74204d102f1e1bfdbbabeac85b183"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PatientModule-d3c74204d102f1e1bfdbbabeac85b183"' :
                                        'id="xs-injectables-links-module-PatientModule-d3c74204d102f1e1bfdbbabeac85b183"' }>
                                        <li class="link">
                                            <a href="injectables/PatientService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PatientService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ScanTrackingModule.html" data-type="entity-link">ScanTrackingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-ScanTrackingModule-790badd0a9e073a0ae5912839fe068b2"' : 'data-target="#xs-controllers-links-module-ScanTrackingModule-790badd0a9e073a0ae5912839fe068b2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ScanTrackingModule-790badd0a9e073a0ae5912839fe068b2"' :
                                            'id="xs-controllers-links-module-ScanTrackingModule-790badd0a9e073a0ae5912839fe068b2"' }>
                                            <li class="link">
                                                <a href="controllers/ScanTrackingController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScanTrackingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-ScanTrackingModule-790badd0a9e073a0ae5912839fe068b2"' : 'data-target="#xs-injectables-links-module-ScanTrackingModule-790badd0a9e073a0ae5912839fe068b2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ScanTrackingModule-790badd0a9e073a0ae5912839fe068b2"' :
                                        'id="xs-injectables-links-module-ScanTrackingModule-790badd0a9e073a0ae5912839fe068b2"' }>
                                        <li class="link">
                                            <a href="injectables/ScanTrackingService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ScanTrackingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskManagerModule.html" data-type="entity-link">TaskManagerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TaskManagerModule-3d1c1d6aa5df83aa7fa6a6c70e6bcfd7"' : 'data-target="#xs-controllers-links-module-TaskManagerModule-3d1c1d6aa5df83aa7fa6a6c70e6bcfd7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskManagerModule-3d1c1d6aa5df83aa7fa6a6c70e6bcfd7"' :
                                            'id="xs-controllers-links-module-TaskManagerModule-3d1c1d6aa5df83aa7fa6a6c70e6bcfd7"' }>
                                            <li class="link">
                                                <a href="controllers/TaskManagerController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TaskManagerController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TaskManagerModule-3d1c1d6aa5df83aa7fa6a6c70e6bcfd7"' : 'data-target="#xs-injectables-links-module-TaskManagerModule-3d1c1d6aa5df83aa7fa6a6c70e6bcfd7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskManagerModule-3d1c1d6aa5df83aa7fa6a6c70e6bcfd7"' :
                                        'id="xs-injectables-links-module-TaskManagerModule-3d1c1d6aa5df83aa7fa6a6c70e6bcfd7"' }>
                                        <li class="link">
                                            <a href="injectables/TaskManagerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TaskManagerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TreatmentModule.html" data-type="entity-link">TreatmentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TreatmentModule-8389cf715944a066d69a4fe8c1b3e7c9"' : 'data-target="#xs-controllers-links-module-TreatmentModule-8389cf715944a066d69a4fe8c1b3e7c9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TreatmentModule-8389cf715944a066d69a4fe8c1b3e7c9"' :
                                            'id="xs-controllers-links-module-TreatmentModule-8389cf715944a066d69a4fe8c1b3e7c9"' }>
                                            <li class="link">
                                                <a href="controllers/TreatmentController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TreatmentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TreatmentModule-8389cf715944a066d69a4fe8c1b3e7c9"' : 'data-target="#xs-injectables-links-module-TreatmentModule-8389cf715944a066d69a4fe8c1b3e7c9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TreatmentModule-8389cf715944a066d69a4fe8c1b3e7c9"' :
                                        'id="xs-injectables-links-module-TreatmentModule-8389cf715944a066d69a4fe8c1b3e7c9"' }>
                                        <li class="link">
                                            <a href="injectables/TreatmentService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TreatmentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link">UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UserModule-7b3157fa1d831137dab3b34e4c644ff8"' : 'data-target="#xs-controllers-links-module-UserModule-7b3157fa1d831137dab3b34e4c644ff8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-7b3157fa1d831137dab3b34e4c644ff8"' :
                                            'id="xs-controllers-links-module-UserModule-7b3157fa1d831137dab3b34e4c644ff8"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UserModule-7b3157fa1d831137dab3b34e4c644ff8"' : 'data-target="#xs-injectables-links-module-UserModule-7b3157fa1d831137dab3b34e4c644ff8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-7b3157fa1d831137dab3b34e4c644ff8"' :
                                        'id="xs-injectables-links-module-UserModule-7b3157fa1d831137dab3b34e4c644ff8"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Acknowledgement.html" data-type="entity-link">Acknowledgement</a>
                            </li>
                            <li class="link">
                                <a href="classes/Appointment.html" data-type="entity-link">Appointment</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthCredentialsDto.html" data-type="entity-link">AuthCredentialsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmergencyContact.html" data-type="entity-link">EmergencyContact</a>
                            </li>
                            <li class="link">
                                <a href="classes/FamilyDoctor.html" data-type="entity-link">FamilyDoctor</a>
                            </li>
                            <li class="link">
                                <a href="classes/Form.html" data-type="entity-link">Form</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormDTO.html" data-type="entity-link">FormDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormTemplate.html" data-type="entity-link">FormTemplate</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormTemplateDTO.html" data-type="entity-link">FormTemplateDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtStrategy.html" data-type="entity-link">JwtStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/Patient.html" data-type="entity-link">Patient</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientDTO.html" data-type="entity-link">PatientDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/Report.html" data-type="entity-link">Report</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReportTemplates.html" data-type="entity-link">ReportTemplates</a>
                            </li>
                            <li class="link">
                                <a href="classes/Scan.html" data-type="entity-link">Scan</a>
                            </li>
                            <li class="link">
                                <a href="classes/ScanDTO.html" data-type="entity-link">ScanDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/ScanTypes.html" data-type="entity-link">ScanTypes</a>
                            </li>
                            <li class="link">
                                <a href="classes/Task.html" data-type="entity-link">Task</a>
                            </li>
                            <li class="link">
                                <a href="classes/TaskDTO.html" data-type="entity-link">TaskDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/TestTable.html" data-type="entity-link">TestTable</a>
                            </li>
                            <li class="link">
                                <a href="classes/Treatment.html" data-type="entity-link">Treatment</a>
                            </li>
                            <li class="link">
                                <a href="classes/TreatmentDTO.html" data-type="entity-link">TreatmentDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDTO.html" data-type="entity-link">UpdateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserDTO.html" data-type="entity-link">UserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserGroups.html" data-type="entity-link">UserGroups</a>
                            </li>
                            <li class="link">
                                <a href="classes/Users.html" data-type="entity-link">Users</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/JwtPayloadInterface.html" data-type="entity-link">JwtPayloadInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link">User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});