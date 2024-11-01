﻿<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CountriesDropdonw._Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="headContent" runat="server">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.min.css" rel="stylesheet">
    <link href="Content/CountriesDropdown/CountriesDropdown.css" rel="stylesheet" />
</asp:Content>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="form-group">
                    <label for="countrySelect">Selecione um país</label>
                    <select id="countrySelect" class="selectpicker form-control" data-live-search="true" title="Selecione um país"></select>
                </div>

                <div class="form-group">
                    <label for="passportInput">Número do Passaporte</label>
                    <input type="text" class="form-control" id="passportInput" placeholder="Digite o número do passaporte" disabled>
                    <div class="invalid-feedback">Número de passaporte inválido.</div>
                    <div class="valid-feedback">Número de passaporte válido.</div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>

<asp:Content ID="Content4" ContentPlaceHolderID="Scripts" runat="server">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
    <script src="Scripts/CountriesDropdown/isPassportNumber.js"></script>
    <script src="Scripts/CountriesDropdown/CountriesDropdownjs.js"></script>
</asp:Content>
